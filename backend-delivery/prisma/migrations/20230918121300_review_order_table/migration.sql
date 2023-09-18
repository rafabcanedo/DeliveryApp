/*
  Warnings:

  - You are about to drop the column `price` on the `orders` table. All the data in the column will be lost.
  - Added the required column `addressUser` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameUser` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "totalPrice" INTEGER NOT NULL,
    "nameUser" TEXT NOT NULL,
    "addressUser" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_orders" ("created_at", "id") SELECT "created_at", "id" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
