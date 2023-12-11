import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../db/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const dbAdapter = PrismaAdapter(prisma);

const authOptions: AuthOptions = {
  adapter: dbAdapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("Went in");
        console.log(credentials);

        try {
          if (!credentials?.email || !credentials?.password) {
            console.log("Went in 1");

            return null;
          }
          const user = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });
          if (!user) {
            console.log("Went in 2");

            return null;
          }
          const isPassOk = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPassOk) {
            console.log("Went in 3");

            return null;
          }
          console.log("Went in 4");
          console.log(user);

          return user;
        } catch (error: any) {
          console.log("Went in 5");

          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/account/signin",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
