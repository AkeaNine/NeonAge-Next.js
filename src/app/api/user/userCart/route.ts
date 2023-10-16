import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db/client";

export async function GET(request: NextRequest) {
  const session = await getServerSession();
  try {
    if (session?.user?.email !== null) {
      const userCart = await prisma.user.findUnique({
        where: {
          email: session?.user?.email,
        },
        select: {
          cart: true
        },
      });

      return NextResponse.json(userCart);
    }
  } catch (error: any) {
    console.log("could not get user cart items");
  }
}
