-- AlterTable
ALTER TABLE "User" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "payments" DROP NOT NULL,
ALTER COLUMN "rentals" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
