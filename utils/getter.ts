import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./db";

export async function getUser() {
  const user = await currentUser();

  const match = await prisma.user.findUnique({
    where: {
      clerk_id: user.id as string,
    },
  });

  return match;
}
