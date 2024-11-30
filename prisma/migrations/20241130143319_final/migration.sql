/*
  Warnings:

  - You are about to drop the column `budgetId` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `budgetId` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `clerk_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Budget` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_userId_fkey";

-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_budgetId_fkey";

-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_budgetId_fkey";

-- DropIndex
DROP INDEX "User_clerk_id_key";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "budgetId",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "budgetId",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "clerk_id";

-- DropTable
DROP TABLE "Budget";
