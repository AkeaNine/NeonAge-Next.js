import { getServerSession } from "next-auth";
import prisma from "../../../../db/client";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  try {
    if (session?.user?.email) {
        const user = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
        });
        if (!user) {
          return;
        }
        console.log("working");
        return new NextResponse(JSON.stringify(user.cart), {status: 200});
      }
  } catch (error: any) {
    return new NextResponse("something went wrong", {status: 500})
  }
}
