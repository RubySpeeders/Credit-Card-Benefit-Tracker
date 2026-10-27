'use client';

import React from 'react';
import CardDisplay, { Card } from './CardDisplay';

interface MobileViewProps {
  cards: Card[];
}

export default function MobileView({ cards }: MobileViewProps) {
  if (!cards || cards.length === 0) return null;

  return (
    <div className="flex md:hidden flex-col w-full">
      
      {/* Mobile Header */}
      <div className="mb-4 text-center px-4">
        <h2 className="text-xl font-bold text-gray-800">My Wallet</h2>
        <p className="text-sm text-gray-500">Swipe horizontally to see other cards</p>
      </div>

      {/* Swipeable Carousel Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 w-full hide-scrollbar">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="w-full flex-none snap-center px-4 flex justify-center"
          >
            <CardDisplay card={card} />
          </div>
        ))}
      </div>

      {/* CSS to hide the ugly scrollbar on some mobile browsers while keeping functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}