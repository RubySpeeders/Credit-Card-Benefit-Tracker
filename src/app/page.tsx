import DesktopView from '../app/components/DesktopView';
import MobileView from '../app/components/MobileView';
import { prisma } from '@/lib/prisma';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const instant = false;

export default async function Home() {
  const cards = await prisma.card.findMany({
    include: {
      benefits: true,
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">

        <DesktopView cards={cards} />
        <MobileView cards={cards} />
      </div>
    </main>
  );
}