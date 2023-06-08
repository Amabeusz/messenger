import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getMessages() {
  return await prisma.message.findMany();
}