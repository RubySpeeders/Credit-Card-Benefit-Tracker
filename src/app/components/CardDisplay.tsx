'use client';

import { useState } from 'react';
import BenefitItem, { Benefit } from './BenefitItem';

export type Card = {
  id: string;
  name: string;
  issuer: string;
  annual_fee: number;
  benefits: Benefit[];
};

interface CardDisplayProps {
  card: Card;
}

export default function CardDisplay({ card }: CardDisplayProps) {
  const [usedBenefits, setUsedBenefits] = useState<Set<string>>(new Set());

  const handleToggle = (benefitId: string) => {
    setUsedBenefits((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(benefitId)) {
        newSet.delete(benefitId);
      } else {
        newSet.add(benefitId);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-md p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-md">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{card.issuer}</p>
        <h2 className="text-xl font-bold text-gray-900 leading-tight mt-1">{card.name}</h2>
        <p className="mt-2 text-sm font-medium text-gray-700">Annual Fee: ${card.annual_fee}</p>
      </div>
      
      <div className="space-y-4">
        {card.benefits.map((benefit) => (
          <BenefitItem 
            key={benefit.id} 
            benefit={benefit} 
            isUsed={usedBenefits.has(benefit.id)} 
            onToggle={handleToggle} 
          />
        ))}
      </div>
    </div>
  );
}