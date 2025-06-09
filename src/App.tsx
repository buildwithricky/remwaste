
import { useEffect, useState } from 'react';
import SkipSelection from './pages/SkipSelection'
import type { Skip } from './types/Skip';

function App() {
const [data, setData] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || 'Unexpected error');
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  if (loading) return   <div className='h-screen w-full bg-gray-900 flex justify-center items-center'><div className="w-8 h-8 border-4  border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>
;
  if (error) return <p>Error: {error}</p>;

  return (
    
      <SkipSelection data={data}/>
  
  )
}

export default App
