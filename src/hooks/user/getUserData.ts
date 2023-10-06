import { getServerSession } from "next-auth";
import prisma from "../../db/client"
import { redirect } from "next/navigation";

export default async function getUserData() {
    const session = await getServerSession()

    if (session?.user?.email !== null && session?.user?.email !== undefined) {
        try {
            const userInfo = await prisma.user.findUnique({
                where: {
                    email: session?.user?.email
                }
            })
            const userData = {
                firstName: userInfo?.firstName,
                lastName: userInfo?.lastName,
                email: userInfo?.email,
            }
            return userData
        } catch (error: any) {
            // redirect("account/signin")
            console.log("wrong!!");
            
        }
    }
    return

}