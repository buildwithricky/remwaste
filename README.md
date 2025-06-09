# REMWaste Skip Size Redesign

## Project Overview

This project is a React-based redesign of the **“Choose Your Skip Size”** page for REMWaste, aiming to modernize the user interface while preserving the core functionality. The redesign focuses on improving usability, accessibility, and responsiveness for both desktop and mobile web users.

## Approach and Key Features

- **Data Integration:**  
  Skip size options are dynamically fetched from the REMWaste API endpoint based on postcode input, ensuring the displayed skips reflect accurate availability by location.

- **Component-Based Architecture:**  
  The UI is composed of modular, reusable React components (`SkipSelection`, `SkipCard`, `Progress`, etc.) written in TypeScript, providing type safety and easier maintainability.

- **Responsive Design with Tailwind CSS:**  
  Tailwind CSS utility classes are heavily utilized to create a clean, responsive grid and layout that adapts smoothly from mobile devices to large desktops. This approach keeps styling consistent and minimal in CSS files.

- **User Experience Enhancements:**  
  - Clear visual highlights indicate the currently selected skip.  
  - Interactive skip cards support keyboard navigation (`Enter` and `Space` keys), improving accessibility.  
  - VAT-inclusive pricing is calculated dynamically and displayed clearly.

- **Accessibility Considerations:**  
  Semantic HTML roles, keyboard focus management, and clear visual feedback make the interface usable by screen readers and keyboard-only users.

## How to Build and Run Locally

### Prerequisites

- **Node.js** (v16 or higher recommended)  
- **pnpm** (Fast, efficient package manager)  

If you don’t have `pnpm` installed, you can install it globally with:

```bash
npm install -g pnpm
More info at the official pnpm site: https://pnpm.io/installation

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/remwaste-skip-redesign.git
cd remwaste-skip-redesign
Install dependencies:

bash
Copy
Edit
pnpm install
Running the Development Server
Start the local development server with:

bash
Copy
Edit
pnpm dev
This will launch the app at http://localhost:3000. The app supports hot-reloading for instant feedback on code changes.

Technologies Used
React with TypeScript for scalable, type-safe component development.

Tailwind CSS for utility-first, responsive styling. Tailwind was configured with JIT mode for optimal performance and fast builds.

Fetch API and React hooks handle asynchronous data fetching and state management efficiently.

Accessibility best practices incorporated with ARIA roles, keyboard interaction support, and semantic HTML.

Deployment
The app is automatically deployed via Netlify on every push to the main branch. This ensures that the live version is always up to date with the latest code.

You can view the live, accessible version here:
➡️ https://remwaste-patrick.netlify.app/

