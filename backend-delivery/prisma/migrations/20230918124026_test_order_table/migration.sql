/*
  Warnings:

  - Added the required column `productId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "nameUser" TEXT NOT NULL,
    "addressUser" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_orders" ("addressUser", "created_at", "id", "nameUser", "totalPrice") SELECT "addressUser", "created_at", "id", "nameUser", "totalPrice" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
