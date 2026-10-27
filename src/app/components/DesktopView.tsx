'use client';

import React, { useState } from 'react';
import CardDisplay, { Card } from './CardDisplay';

interface DesktopViewProps {
  cards: Card[];
}

export default function DesktopView({ cards }: DesktopViewProps) {
  // Default to the first card in the array (e.g., Amex Platinum)
  const [selectedCardId, setSelectedCardId] = useState(cards[0]?.id);

  const selectedCard = cards.find((c) => c.id === selectedCardId) || cards[0];

  if (!cards || cards.length === 0) return null;

  return (
    <div className="hidden md:flex w-full max-w-5xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white min-h-[500px]">
      {/* Sidebar Navigation */}
      <div className="w-1/3 bg-gray-50 border-r border-gray-200 p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">My Wallet</h2>
        <nav className="space-y-1">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => setSelectedCardId(card.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                selectedCardId === card.id
                  ? 'bg-blue-100 text-blue-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="text-xs text-gray-500 uppercase tracking-wider">{card.issuer}</div>
              <div className="truncate font-medium">{card.name}</div>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="w-2/3 p-8 flex justify-center items-start bg-slate-50">
        {selectedCard && <CardDisplay card={selectedCard} />}
      </div>
    </div>
  );
}