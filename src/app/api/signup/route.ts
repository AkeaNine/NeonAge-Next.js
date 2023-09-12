import { NextResponse } from "next/server";
import prisma from "../../../db/client";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, password, re_pass, checkBox } = body;
    console.log(body);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !re_pass ||
      !checkBox ||
      re_pass !== password
    ) {
      return new NextResponse("Fill out the form with correct information", {
        status: 400,
      });
    }
    const userExists = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userExists) {
      return new NextResponse("Account already exists", { status: 400 });
    }

    try {
      const hashedPass = await bcrypt.hash(password, 12);
      const user = await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPass,
        },
      });

      return new NextResponse("success", {status: 200})
    } catch (error: any) {
      return new NextResponse("Something went wrong2", { status: 500 });
    }
  } catch (error: any) {
    return new NextResponse("Something went wrong1", { status: 500 });
  }
}
