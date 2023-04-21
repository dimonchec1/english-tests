import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc"
import { prisma } from '../../db'
import { z } from "zod"

export const organizationRouter = createTRPCRouter({
    organizations: publicProcedure
        .query(async () => {
            const organizations = await prisma.organization.findMany()

            return organizations
        }),
    create: publicProcedure
        .input(z.object({
            name: z.string().cuid()
        }))
        .mutation(async ({input}) => {
            const {name} = input

            const event = await prisma.organization.create({
                data: {
                    routePath: '',
                    name
                }
            })

            return event.id
        }),
})