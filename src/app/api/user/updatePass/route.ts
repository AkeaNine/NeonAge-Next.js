import { NextResponse } from "next/server";
import prisma from "../../../../db/client";
import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();
  const { currentPass, newPass, repeatPass } = body;
  const session = await getServerSession();

  console.log(currentPass, newPass, repeatPass);
  console.log(session?.user?.email);

  if (!currentPass || !newPass || !repeatPass || newPass !== repeatPass) {
    return new NextResponse("Fill out the form with correct information", {
      status: 400,
    });
  }

  try {
    if (session?.user?.email) {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (user) {
        const isPassOk = await bcrypt.compare(currentPass, user.password);

        if (!isPassOk) {
          return new NextResponse("Incorrect info", { status: 400 });
        }
        const newPassword = await bcrypt.hash(newPass, 12);

        await prisma.user.update({
          where: {
            email: session.user.email,
          },
          data: {
            password: newPassword,
          },
        });

        return new NextResponse("OK", { status: 200 });
      }
    }
  } catch (error: any) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
