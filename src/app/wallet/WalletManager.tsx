'use client';

import React, { useState } from 'react';
import { Card } from '@prisma/client';

interface WalletManagerProps {
  allCards: Card[];
  initialOwnedIds: string[];
  userId: string;
}

export default function WalletManager({ allCards, initialOwnedIds, userId }: WalletManagerProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(initialOwnedIds));
  const [isSaving, setIsSaving] = useState(false);

  const toggleCard = (cardId: string) => {
    const next = new Set(selectedIds);
    if (next.has(cardId)) {
      next.delete(cardId);
    } else {
      next.add(cardId);
    }
    setSelectedIds(next);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // TODO: We will build the Server Action for this in Phase 4!
    console.log("Saving these card IDs to database:", Array.from(selectedIds));
    setTimeout(() => setIsSaving(false), 1000); 
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="space-y-4 mb-8">
        {allCards.map((card) => (
          <label 
            key={card.id} 
            className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              checked={selectedIds.has(card.id)}
              onChange={() => toggleCard(card.id)}
            />
            <div className="ml-4">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{card.issuer}</p>
              <p className="text-lg font-medium text-gray-900">{card.name}</p>
            </div>
          </label>
        ))}
      </div>

      <button
        onClick={handleSave}
        disabled={isSaving}
        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isSaving ? 'Saving...' : 'Save Wallet'}
      </button>
    </div>
  );
}