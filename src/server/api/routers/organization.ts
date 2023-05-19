import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc"
import { prisma } from '../../db'
import { z } from "zod"

export const organizationRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async () => {
            const organizations = await prisma.organization.findMany()

            return organizations
        }),
    create: publicProcedure
        .input(z.object({
            name: z.string()
        }))
        .mutation(async ({input}) => {
            const {name} = input

            const organization = await prisma.organization.create({
                data: {
                    routePath: '',
                    name
                }
            })

            return organization.id
        }),
})