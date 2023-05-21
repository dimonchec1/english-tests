import { createTRPCRouter, publicProcedure, authenticatedProcedure } from "../trpc"
import { prisma } from '../../db';
import { TRPCError } from '@trpc/server';
import { signUpSchema } from "../validation/auth";
import { encrypt } from "../security/crypt";

export const userRouter = createTRPCRouter({
    create: publicProcedure
        .input(signUpSchema)
        .mutation(async ({input}) => {
            const {username, email, password} = input

            const candidate = await prisma.user.findFirst({where: {email}})

            if (candidate) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: 'User is already exists'
                })
            }

            const hashPassword = await encrypt(password)

            const user = await prisma.user.create({data: {
                username: username,
                email: email,
                password: hashPassword
            }})
        }),
})