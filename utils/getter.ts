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

export async function getAllExpenses(query) {
  const user = await getUser();
  const expenses = await prisma.expense.findMany({
    where: {
      OR: [
        {
          userId: user?.id,
          description: {
            contains: query,
          },
        },
      ],
    },
  });

  return expenses;
}
