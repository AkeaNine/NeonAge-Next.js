import { getServerSession } from "next-auth";


export default async function GetServerSession() {
    const session = getServerSession()
    return session
}