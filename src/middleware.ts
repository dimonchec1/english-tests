import { Role } from "@prisma/client"
import { withAuth } from "next-auth/middleware"
import { NextURL } from "next/dist/server/web/next-url"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request) {
        const {pathname} = request.nextUrl
        const userRole = request.nextauth.token?.role
        // const isImposterCreator = pathname.startsWith('/creator') && userRole !== Role.CREATOR
        // const isImposterAdmin = pathname.startsWith('/admin') && userRole !== Role.ADMIN
        // if (isImposterCreator || isImposterAdmin) {
        //     // TODO: not lose referer url, open auth popup on the same page
        //     return NextResponse.redirect(new NextURL(`/?auth=signin`, request.url))
        // }
    }, {
        callbacks: {
            authorized: () => true
        }
    }
)