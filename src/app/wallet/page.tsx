import { Suspense } from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Loading from './loading';
import WalletManager from './WalletManager';

// We extract the data fetching into its own asynchronous component
async function WalletDataFetcher() {
  const user = await currentUser();
  
  if (!user) {
    redirect('/');
  }

  const allCards = await prisma.card.findMany({
    orderBy: { issuer: 'asc' }
  });

  const userCards = await prisma.userCard.findMany({
    where: { user_id: user.id },
    select: { card_id: true }
  });

  const ownedCardIds = userCards.map(uc => uc.card_id);

  return (
    <WalletManager 
      allCards={allCards} 
      initialOwnedIds={ownedCardIds} 
      userId={user.id}
    />
  );
}

// The main page is now just a synchronous shell that wraps the fetcher in Suspense
export default function WalletPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Manage Wallet
          </h1>
          <p className="mt-2 text-gray-600">
            Select the cards you currently own to track their benefits.
          </p>
        </header>

        <Suspense fallback={<Loading />}>
          <WalletDataFetcher />
        </Suspense>
      </div>
    </main>
  );
}