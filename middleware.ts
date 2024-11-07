import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { siteConfig } from "./config/site";

// Define protected routes that require the user to be authenticated
const protectedRoutes = [siteConfig.path.paths.dashboard];
const authFlowPath = "/auth/flow"; // Specific path for auth flow

export async function middleware(req: NextRequest) {
  try {
    // Get the session token
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const { pathname } = req.nextUrl;

    // Handle protected routes (e.g., /dashboard)
    if (protectedRoutes.includes(pathname)) {
      // If no session exists, redirect to /signin
      if (!session) {
        const signInUrl = new URL(siteConfig.path.paths.signin, req.url);
        return NextResponse.redirect(signInUrl);
      }
    }

    // Redirect to /dashboard if user is already signed in and trying to access /signin or /signup
    if (
      (pathname === siteConfig.path.paths.signin ||
        pathname === siteConfig.path.paths.signup) &&
      session
    ) {
      const dashboardUrl = new URL(siteConfig.path.paths.dashboard, req.url);
      return NextResponse.redirect(dashboardUrl);
    }

    // Redirect to /jobs if user is already signed in and trying to access /auth/flow
    if (pathname === authFlowPath && session) {
      const dashboardUrl = new URL(siteConfig.path.paths.dashboard, req.url); // Update this to your actual jobs URL
      return NextResponse.redirect(dashboardUrl);
    }

    // Continue to the requested page
    return NextResponse.next();
  } catch (error: any) {
    console.error("Error in middleware:", error);
    const errorUrl = new URL(siteConfig.path.paths.error, req.url);
    return NextResponse.redirect(errorUrl);
  }
}

// Paths middleware should run on
export const config = {
  matcher: [
    "/dashboard", // Protected route
    "/auth/signup", // Auth route
    "/auth/signin", // Auth route
    "/auth/flow", // Specific route to handle
  ],
};
