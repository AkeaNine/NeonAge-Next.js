import { getServerSession } from "next-auth";
import prisma from "../../../../db/client";
import { cookies } from 'next/headers'


export default async function GET() {
    const session = await getServerSession();
    try {
        if (session?.user?.email) {
            const user = await prisma.user.findUnique({
                where: {
                    email: session.user.email,
                },
            });
            return user?.cart;
        } else {
          const cookieStore = cookies()
          const cart = cookieStore.get("cart")
          return cart
      }
    } catch (error: any) {
      console.log("something went wrong");
    }
}