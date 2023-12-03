import { getServerSession } from "next-auth";
import prisma from "../../db/client";
import { cookies } from "next/headers";

export async function GetCartData() {
  const session = await getServerSession();
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
    return user.cart;
  } else {
    const cookieStore = cookies();
    const cart = cookieStore.get("cart");
    return cart;
  }
}

// try {
// } catch (error: any) {
//   console.log("something went wrong COOK");
// }
