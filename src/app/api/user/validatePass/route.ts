import { NextResponse } from "next/server";
import prisma from "../../../../db/client";
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  const body = await req.json();
  const { token, data } = body;
  const { newPass, repeatPass } = data;

//   console.log(token, newPass, repeatPass);
  console.log(data, token);

  if (!token || !newPass || !repeatPass || newPass !== repeatPass) {
    return new NextResponse("Please provide correct information", {
      status: 400,
    });
  }

  try {
    const verificationToken = await prisma.passwordResetToken.findUnique({
      where: {
        token: token,
      },
    });

    if (!verificationToken) {
      return new NextResponse("Something went wrong. Please try again", {
        status: 400,
      });
    }

    const currentTime = new Date();
    const expirationTime = new Date(verificationToken.expires);

    if (currentTime > expirationTime) {
      return new NextResponse("Verification time Expired!", { status: 400 });
    }

    if (currentTime < expirationTime) {
        const hashedPass = await bcrypt.hash(newPass, 10)
        try {
            await prisma.user.update({
                where: {
                  email: verificationToken.email,
                },
                data: {
                  password: hashedPass
                }
              });
              
              await prisma.passwordResetToken.delete({
                  where: {
                      token: verificationToken.token
                  }
              })

              return new NextResponse("OK", {status: 200})
        } catch (error: any) {
            return new NextResponse("Something went wrong", { status: 500 });
        }
    }

  } catch (error: any) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
