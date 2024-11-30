/*
  Warnings:

  - Changed the type of `category` on the `Expense` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category` on the `Income` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ExpenseCategory" AS ENUM ('FOOD', 'TRANSPORTATION', 'UTILITIES', 'ENTERTAINMENT', 'HEALTHCARE', 'EDUCATION', 'SHOPPING', 'HOUSING', 'SAVINGS', 'OTHER');

-- CreateEnum
CREATE TYPE "IncomeCategory" AS ENUM ('SALARY', 'FREELANCE', 'INVESTMENT', 'RENTAL', 'SIDE_HUSTLE', 'BONUS', 'GIFT', 'PASSIVE_INCOME', 'REFUND', 'OTHER');

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "category",
ADD COLUMN     "category" "ExpenseCategory" NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "category",
ADD COLUMN     "category" "IncomeCategory" NOT NULL;

-- DropEnum
DROP TYPE "Category";
