-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_number_key" ON "Address"("number");
