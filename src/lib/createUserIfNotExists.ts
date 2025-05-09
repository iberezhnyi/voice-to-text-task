import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function ensureUserExists() {
  const user = await currentUser(); // Получаем текущего пользователя из Clerk
  if (!user) throw new Error("User is not authenticated");

  const existingUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!existingUser) {
    // Создаем нового пользователя в базе данных
    await prisma.user.create({
      data: {
        clerkUserId: user.id,
        userName: user.username || null,
      },
    });
  }
}
