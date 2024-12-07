"use server";

import { redirect } from "next/navigation";
import { prisma } from "./db";
import { getUser } from "./getter";
import { revalidatePath } from "next/cache";

export async function createExpense(previousInput, formdata: FormData) {
  const user = await getUser();
  const expense = await prisma.expense.create({
    data: {
      userId: user?.id,
      amount: Number(formdata.get("Amount")),
      description: formdata.get("Description"),
      category: formdata.get("category"),
    },
  });

  redirect("/expenses");
}

export async function createIncome(previousInput, formdata: FormData) {
  const user = await getUser();
  const income = await prisma.income.create({
    data: {
      userId: user?.id,
      amount: Number(formdata.get("Amount")),
      source: formdata.get("Source"),
      category: formdata.get("category"),
    },
  });

  redirect("/incomes");
}

export async function updateExpense(previousInput, formdata: FormData) {
  const user = await getUser();
  const expense = await prisma.expense.update({
    where: {
      userId: user?.id,
      id: previousInput.id,
    },
    data: {
      amount: Number(formdata.get("Amount")),
      description: formdata.get("Description"),
      category: formdata.get("category"),
    },
  });
  revalidatePath("/expenses");

  return {
    id: previousInput.id,
    category: formdata.get("category"),
  };
}

export async function deleteExpense(previousInput) {
  const user = await getUser();

  const expense = await prisma.expense.delete({
    where: {
      userId: user?.id,
      id: previousInput.id,
    },
  });

  revalidatePath("/expenses");
}

export async function updateIncome(previousInput, formdata: FormData) {
  const user = await getUser();

  const income = await prisma.income.update({
    where: {
      userId: user?.id,
      id: previousInput.id,
    },
    data: {
      amount: Number(formdata.get("Amount")),
      source: formdata.get("Source"),
      category: formdata.get("category"),
    },
  });

  revalidatePath("/incomes");

  return {
    id: previousInput.id,
  };
}

export async function deleteIncome(previousInput) {
  const user = await getUser();

  const income = await prisma.income.delete({
    where: {
      userId: user?.id,
      id: previousInput.id,
    },
  });

  revalidatePath("/incomes");
}

export async function getExpensesByCategory() {
  const user = await getUser();
  const expense = await prisma.expense.groupBy({
    by: ["category"],
    where: {
      userId: user?.id,
    },
    _sum: {
      amount: true,
    },
  });
  return expense;
}

export async function getIncomeByCategory() {
  const user = await getUser();
  const income = await prisma.income.groupBy({
    by: ["category"],
    where: {
      userId: user?.id,
    },
    _sum: {
      amount: true,
    },
  });
  return income;
}
