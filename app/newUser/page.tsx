import { UserButton, UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../../utils/db";
import { redirect } from "next/navigation";

export default async function connect() {
  const user = await currentUser();

  const match = await prisma.user.findUnique({
    where: {
      clerk_id: user.id as string,
    },
  });
  if (!match) {
    const newUser = await prisma.user.create({
      data: {
        clerk_id: user.id,
        email: user.emailAddresses[0].emailAddress,
        fullName: user.username,
      },
    });
    console.log("User created succesfully");
  }
  redirect("/dashboard");
}
