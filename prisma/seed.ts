import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.adminUser.findUnique({
    where: {
      email: "admin@piusvirgin.com",
    },
  });

  if (existingAdmin) {
    console.log("✅ Admin already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin@123456", 10);

  await prisma.adminUser.create({
    data: {
      name: "Pius Virgin",
      email: "admin@piusvirgin.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("🎉 Admin account created successfully.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
