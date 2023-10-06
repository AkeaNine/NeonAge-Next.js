import { NextResponse } from "next/server";
import prisma from "../../../../db/client";
import { getServerSession } from "next-auth";

export async function POST(req: Request): Promise<Response> {
  const body = await req.json();
  const { firstName, lastName } = body;
  const session = await getServerSession();

  console.log(firstName, lastName);
  console.log(session?.user?.email);

  if (!firstName || !lastName) {
    return new NextResponse("Fill out the form with correct information", {
      status: 400,
    });
  }
  try {
    if (session?.user?.email) {
      await prisma.user.update({
        where: {
          email: session.user.email,
        },
        data: {
          firstName: firstName,
          lastName: lastName,
        },
      });

      return new NextResponse("OK", { status: 200 });
    }
    return new NextResponse("User email not found", { status: 400 });
  } catch (error: any) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
