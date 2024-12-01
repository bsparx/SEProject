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
            mode: "insensitive",
          },
        },
      ],
    },
  });

  return expenses;
}

export async function getAllIncomes(query) {
  const user = await getUser();

  const expenses = await prisma.income.findMany({
    where: {
      OR: [
        {
          userId: user?.id,
          source: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  return expenses;
}

export async function getTotalExpense() {
  const user = await getUser();

  const amount = await prisma.expense.aggregate({
    where: {
      userId: user?.id,
    },
    _sum: {
      amount: true,
    },
  });

  return amount._sum.amount;
}

export async function getTotalIncome() {
  const user = await getUser();

  const amount = await prisma.income.aggregate({
    where: {
      userId: user?.id,
    },
    _sum: {
      amount: true,
    },
  });

  return amount._sum.amount;
}

export async function getRecentExpenses() {
  const user = await getUser();

  const incomes = await prisma.expense.findMany({
    where: {
      userId: user?.id,
    },
    take: 6,
    orderBy: {
      date: "desc",
    },
  });

  return incomes;
}

export async function getRecentIncomes() {
  const user = await getUser();

  const income = await prisma.income.findMany({
    where: {
      userId: user?.id,
    },
    take: 6,
    orderBy: {
      date: "desc",
    },
  });

  return income;
}
