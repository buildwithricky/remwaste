import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Skip } from '@/types/Skip'
import { formatHirePeriod, formatSizeLabel, formatTitle } from '@/utils'
import { ArrowRight } from 'lucide-react'



interface SkipCardProps {
  skip: Skip,
  selectedSkipId: number,
  setSelectedSkipId: (id: number) => void,
  totalPrice: string
}
export const SkipCard = ({ skip, selectedSkipId, setSelectedSkipId, totalPrice }: SkipCardProps) => {


  return (
    <Card
      key={skip.id}
      className={`bg-gray-800 border-2 transition-all cursor-pointer hover:border-blue-500 ${selectedSkipId === skip.id
        ? "border-blue-500"
        : "border-gray-700"
        }`}
      onClick={() => setSelectedSkipId(skip.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setSelectedSkipId(skip.id)
        }
      }}
    >
      <CardContent className="p-4">
        <div className="relative ">
          <div >
            <img src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg" alt="10 Yard Skip" className="w-full h-36 md:h-48 object-cover rounded-md mb-4" />

            {skip.allowed_on_road && <div className="absolute bottom-3 left-2 z-20 space-y-2">
              <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                <span className="text-xs font-medium text-yellow-500">Not Allowed On The Road</span>
              </div>
            </div>}
          </div>

          <div className="absolute top-3 right-3">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs sm:text-sm font-medium">
              {formatSizeLabel(skip.size)}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
            {formatTitle(skip.size)}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            {formatHirePeriod(skip.hire_period_days)}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6">
            £{totalPrice}
          </p>

          {selectedSkipId === skip.id ? (
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-3">
              Selected
            </Button>
          ) : (
            <Button
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white text-sm sm:text-base py-2 sm:py-3"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedSkipId(skip.id)
              }}
            >
              Select This Skip <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
