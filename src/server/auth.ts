import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/server/db";
import { loginSchema } from "./api/validation/auth";
import { verify } from "./api/security/crypt";
import {User} from '@prisma/client'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    // session: async ({ session, token }) => {
    //     if (session?.user) {
    //       session.user.id = token.uid as string;
    //     }
    //     console.log('session')
    //     return session;
    // },
    jwt({ user, token }) {
      if (user) {
        token.uid = user.id
        token.role = "admin"
        // session.user.role = user.role; <-- put other properties on the session here
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
        name: "credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {

          if (!credentials?.email || !credentials.password) {
                throw new Error('Email or password not provided')
          }

          const {email, password} = await loginSchema.parseAsync(credentials)

          const user = await prisma.user.findFirst({
                where: {email},
          })

          if (user) {
            const isValidPassword = await verify(password, user.password)

            if (!isValidPassword) {
                return null
            }
            // Any object returned will be saved in `user` property of the JWT
            console.log(user, 'user return')
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            console.log('null return')
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      })
  ],
  session: {
    strategy: 'jwt'
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30
  }
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
