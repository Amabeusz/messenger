import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser({name, email} : {name: string, email: string}) {
  return await prisma.user.create({
    data : {
        name : name,
        email : email,
    }
  })
}