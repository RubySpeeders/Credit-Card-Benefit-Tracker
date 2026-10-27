import React from 'react';
import DesktopView from './components/DesktopView';
import MobileView from "./components/MobileView";

// Import the hardcoded card data you saved earlier
import cardsData from './data/cards.json';

export default function Home() {
  // Cast the imported JSON to our expected type for TypeScript
  // In Phase 2, this will be replaced by a database fetch
  const cards = cardsData as any; 

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Benefit Tracker
          </h1>
          <p className="mt-2 text-gray-600">
            Keep track of your perks and maximize your wallet.
          </p>
        </header>

        {/* 
          Responsive Layouts 
          Both are rendered, but Tailwind CSS handles the visibility:
          DesktopView is hidden on mobile, MobileView is hidden on desktop.
        */}
        <DesktopView cards={cards} />
        <MobileView cards={cards} />

      </div>
    </main>
  );
}