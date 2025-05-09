// import { createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse, NextRequest } from "next/server";

// const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up", "/"]);
// const isPublicApiRoute = createRouteMatcher([]);

// export default async function clerkMiddleware(req: NextRequest) {
//   const currentUrl = new URL(req.url);
//   const { userId } = await auth();

//   const isHomePage = currentUrl.pathname === "/";
//   const isApiRequest = currentUrl.pathname.startsWith("/api");

//   // Если пользователь аутентифицирован
//   if (userId) {
//     if (isPublicRoute(req) && !isHomePage) {
//       return NextResponse.redirect(new URL("/dashboard", req.url));
//     }
//     return NextResponse.next();
//   }

//   // Если пользователь неаутентифицирован
//   if (!userId) {
//     if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
//       return NextResponse.redirect(new URL("/sign-in", req.url));
//     }
//     if (isApiRequest && !isPublicApiRoute(req)) {
//       return NextResponse.redirect(new URL("/sign-in", req.url));
//     }
//   }

//   return NextResponse.next();
// }
