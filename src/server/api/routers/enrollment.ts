import { createTRPCRouter, publicProcedure, authenticatedProcedure } from "../trpc"
import { prisma } from '../../db';
import { z } from "zod";

export const enrollmentRouter = createTRPCRouter({
    getAll: publicProcedure
        .input(z.object({
            password: z.string().email()
        }))
        .mutation(async ({input}) => {
            const {password} = input
            const email = 'asdf'

            await prisma.user.update({
                where: {
                    email
                },
                data: {
                    password
                }
            })

            return true

        }),
    byUserId: authenticatedProcedure
        .query(async ({ctx}) => {
            const {id: userId} = ctx.session.user 

            const userEnrollment = await prisma.userEnrollment.findMany({
                where: {
                    userId
                }
            })

            return userEnrollment
        })
})