import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import cardsData from '../src/app/data/cards.json';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({adapter});

async function main() {
  console.log('Start seeding...');

  await prisma.userBenefitUsage.deleteMany();
  await prisma.benefit.deleteMany();
  await prisma.card.deleteMany();
  
  for (const card of cardsData) {
    await prisma.card.create({
      data: {
        id: card.id,
        name: card.name,
        issuer: card.issuer,
        annual_fee: card.annual_fee,
        benefits: {
          create: card.benefits.map((benefit) => ({
            id: benefit.id,
            title: benefit.title,
            monetary_value: benefit.monetary_value,
            reset_interval: benefit.reset_interval,
            description: benefit.description,
          })),
        },
      },
    });
    console.log(`Created card: ${card.name}`);
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });