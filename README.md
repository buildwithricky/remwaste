REMWaste Skip Size Redesign
Project Overview
This project is a React-based redesign of the “Choose Your Skip Size” page for REMWaste, aiming to modernize the user interface while preserving the core functionality. The redesign focuses on improving usability, accessibility, and responsiveness for both desktop and mobile web users.

Approach and Key Features
Data Integration:
Skip size options are dynamically fetched from the REMWaste API endpoint based on postcode input, ensuring the displayed skips reflect accurate availability by location.

Component-Based Architecture:
The UI is broken down into modular, reusable React components (SkipSelection, SkipCard, Progress, etc.) written in TypeScript for strong typing and maintainability.

Responsive Design:
Tailwind CSS utility classes enable a flexible grid layout that adapts seamlessly across screen sizes—from mobile devices to large desktop monitors—ensuring an optimal experience on all devices.

User Experience Enhancements:

Clear visual cues highlight the currently selected skip.

Price Calculation:
VAT-inclusive pricing is calculated on the fly to display clear, accurate costs to users.

How to Run Locally
Clone the repository.

Install dependencies with pnpm install.

Run the development server with pnpm dev.

Open http://localhost:3000 in your browser to test the redesigned skip selection page.

# remwaste
