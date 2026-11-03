import React from 'react';
import DesktopView from '../app/components/DesktopView';
import MobileView from '../app/components/MobileView';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const cards = await prisma.card.findMany({
    include: {
      benefits: true,
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Benefit Tracker
          </h1>
          <p className="mt-2 text-gray-600">
            Keep track of your perks and maximize your wallet.
          </p>
        </header>

        <DesktopView cards={cards} />
        <MobileView cards={cards} />
      </div>
    </main>
  );
}