import { Role } from "@prisma/client"
import { withAuth } from "next-auth/middleware"
import { NextURL } from "next/dist/server/web/next-url"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request) {
        const {pathname} = request.nextUrl
        const userRole = request.nextauth.token?.role
    }, {
        callbacks: {
            authorized: () => true
        }
    }
)
