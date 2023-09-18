/*
  Warnings:

  - You are about to drop the column `Image` on the `products` table. All the data in the column will be lost.
  - Added the required column `image` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_products" ("created_at", "description", "id", "name", "price", "stock") SELECT "created_at", "description", "id", "name", "price", "stock" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
