import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

// For the time being, the withAuth middleware only supports "jwt" as session strategy.
export default async function middleware(req: NextRequest) {
  console.log(req.nextUrl.pathname + "1");

  const token = await getToken({ req });
  const isAuthenticated = !!token;

  // if (req.nextUrl.pathname.startsWith("/account")) {
  // console.log(req.nextUrl.pathname + "3");

  if (isAuthenticated) {
    if (req.nextUrl.pathname.startsWith("/account/signup")) {
      return NextResponse.redirect(new URL("/account", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/account/signin")) {
      return NextResponse.redirect(new URL("/account", req.url));
    }
  }

  // if (
  //   req.nextUrl.pathname.startsWith(
  //     "/account/signup" || ("/account/signin" && isAuthenticated)
  //   )
  // ) {
  //   // console.log(req.nextUrl.pathname + "2");
  //   // if (isAuthenticated) {
  //   // if (req.nextUrl.pathname.startsWith("/account/signin")) {
  //   //   return
  //   // }
  //   // }
  //   return NextResponse.redirect(new URL("/account", req.url));
  // }

  if (!isAuthenticated) {
    if (req.nextUrl.pathname.startsWith("/account/signin")) {
      return;
    }
    if (req.nextUrl.pathname.startsWith("/account/signup")) {
      return;
    }
    return NextResponse.redirect(new URL("/account/signin", req.url));
  }
  return;
  // }
}

export const config = {
  matcher: ["/account", "/account/signup", "/account/signin"],
};
