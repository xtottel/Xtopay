
// Import PrismaClient from the root node_modules (monorepo setup)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default prisma;
