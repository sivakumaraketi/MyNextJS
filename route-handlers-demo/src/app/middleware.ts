/* Middleware is a function that runs before the route handler. It can be used 
 to perform operations like logging, authentication, etc. It can also be used to modify the request object before it reaches the route handler.

 In Next.js, middleware can be defined in the `middleware.ts` file in the `app` directory. Middleware functions are exported as named exports and can be used in route handlers by importing them. */
  
// app/middleware.ts or pages/_middleware.ts
import {  NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
  }
  return NextResponse.next();
}

