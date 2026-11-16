'use server';

import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function saveWalletSelections(selectedCardIds: string[]) {
  // 1. Verify the user is actually logged in
  const { userId } = await auth();
  
  if (!userId) {
    throw new Error('Unauthorized');
  }

  // 2. Use a Prisma Transaction to safely swap the old wallet for the new one
  await prisma.$transaction([
    // First, wipe the user's existing saved cards to start fresh
    prisma.userCard.deleteMany({
      where: { user_id: userId },
    }),
    
    // Second, insert the new array of selected cards
    prisma.userCard.createMany({
      data: selectedCardIds.map((cardId) => ({
        user_id: userId,
        card_id: cardId,
        open_date: new Date(), // Defaulting to today for now
      })),
    }),
  ]);

  // 3. Tell Next.js to clear its cache for the wallet page so it shows the fresh data
  revalidatePath('/wallet');
  
  return { success: true };
}