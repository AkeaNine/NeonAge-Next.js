import { NextResponse } from "next/server";
import prisma from "../../../../db/client";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

async function SendMail(
  token: any,
  firstName: string,
  lastName: string,
  email: string
) {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "205208265f8000",
      pass: "410b742bac376f",
    },
  });

  const info = await transport.sendMail({
    from: '"NeonAge" <neonagebd@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Password Reset Request", // Subject line
    text: "Password Reset Email", // plain text body
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,    initial-scale=1.0" />
  <title>Password Reset Email</title>
  <style>
    body {
      font-family: "Inter", sans-serif;
      width: 100%;
      margin: 0;
    }
  </style>
</head>
<body>
  <div style="padding: 5px">
    <div style="display: flex; justify-content: center; width: 100%">
      <a
        href="${process.env.NEXTAUTH_URL}"
        style="
          max-height: 70px;
          height: auto;
          max-width: 80%;
          width: auto;
          display: block;
        "
        ><img
          src="${process.env.NEXTAUTH_URL}N.png"
          alt=""
          style="height: 100%; width: 100%"
      /></a>
    </div>
    <div
      style="
        width: 100%;
        min-height: 50px;
        background: #232f3e;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <h3 style="color: white; font-size: 22px; padding: 0 5px 0 5px">
        Password Reset Request
      </h3>
    </div>
    <p>Dear <b>${firstName + " " + lastName}</b>,</p>
    <p>
      We have received a request to reset your password. To proceed with the
      password reset, please click the link below:
    </p>
    <p>
      <a
        href="${
          process.env.NEXTAUTH_URL
        }/account/reset_password/verification?token=${token}"
        >Reset My Password</a
      >
    </p>

    <span> or, </span>
    <p style="text-wrap: wrap">
      Paste the link below in your browser and follow the on page instructions
      to reset your password:
    </p>
    <p style="overflow-wrap: break-word; word-wrap: break-word">
      ${process.env.NEXTAUTH_URL}/account/reset_password/verification?token=${token}
    </p>

    <p>
      If you did not request a password reset, you can safely ignore this
      email. Your current password will remain unchanged.
    </p>
    <p>Thank you for using our services!</p>
    <p>Sincerely,<br /><b>NEONAGE</b> Support Team</p>

    <div
      style="
        width: 100%;
        background: #232f3e;
        color: white;
        padding: 10px 0 10px 0;
      "
    >
      <div>
        <p style="text-align: center; font-size: 14px; margin: 0">
          This email was sent to
        </p>
        <p style="text-align: center; font-size: 14px; margin: 0">
          <a
            href="mailto:${email}"
            style="
              font-size: 14px;
              text-align: center;
              color: rgb(111, 111, 255);
            "
            >${email}</a
          >
        </p>
      </div>
      <div>
        <p style="text-align: center; font-size: 14px">
          © 2023 NEONAGE, Store Location
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`, // html body
  });

  console.log(info);
}

async function CreateToken(email: string) {
  const salt = await bcrypt.genSalt(8);
  const token = await bcrypt.hash(email, salt);
  const currentTime = new Date();
  const expirationTime = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);

  await prisma.passwordResetToken.create({
    data: {
      email: email,
      token: token,
      expires: expirationTime,
    },
  });

  return token;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  try {
    if (!user) {
      return new NextResponse("Account does not exist", { status: 400 });
    }

    try {
      console.log("went to 1");
      const DBtoken = await prisma.passwordResetToken.findUnique({
        where: {
          email: email,
        },
      });

      if (DBtoken) {
        const expirationTime = new Date(DBtoken.expires);
        const currentTime = new Date();
        console.log("went to 2");

        if (currentTime < expirationTime) {
          const token = DBtoken.token;
          console.log("went to 3");

          SendMail(token, user.firstName, user.lastName, email);
        }

        if (currentTime > expirationTime) {
          const token = await CreateToken(email);
          console.log("went to 4");

          SendMail(token, user.firstName, user.lastName, email);
        }
      }
      if (!DBtoken) {
        const token = await CreateToken(email);
        console.log("went to 5");

        SendMail(token, user.firstName, user.lastName, email);
      }
      return new NextResponse("OK", { status: 200 });
    } catch (error: any) {
      return new NextResponse(error, { status: 400 });
    }
  } catch (error: any) {
    return new NextResponse("Something went wrong2", { status: 400 });
  }
}
