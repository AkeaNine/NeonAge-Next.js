import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db/client";

export async function POST(
  request: NextRequest
): Promise<void | Response> {
  const data = await request.json();
  console.log(data);
  const session = await getServerSession();

  if (session?.user?.email) {
    try {
      await prisma.user.update({
        where: {
          email: session.user.email,
        },
        data: {
          cart: JSON.stringify(data),
        },
      });
      return new NextResponse("OK", { status: 200 });
    } catch (error: any) {
      console.log("something went wrong");
      return new NextResponse(
        "Something went wrong. PLease refresh the page and try again"
      );
    }
  }
  return;
}
