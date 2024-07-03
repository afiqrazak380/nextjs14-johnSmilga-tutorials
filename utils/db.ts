import { PrismaClient } from '@prisma/client';
import { SingletonRouter } from 'next/router';

// Creating the Prisma Client Singleton Function
const prismaClientSingleton = () => {
  return new PrismaClient();
};

type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Setting Up Global Prisma Intance
const globalForPrisma = globalThis as unknown as {
  prisma: prismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Exporting the Prisma Client
export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
