/*
  Warnings:

  - You are about to alter the column `amount` on the `Expense` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `amount` on the `Income` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Expense" ALTER COLUMN "amount" SET DATA TYPE INTEGER,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "amount" SET DATA TYPE INTEGER,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;
