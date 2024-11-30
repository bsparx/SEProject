"use server";

import { redirect } from "next/navigation";
import { prisma } from "./db";
import { getUser } from "./getter";

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

  redirect("/dashboard");
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
  
    redirect("/dashboard");
  }
  