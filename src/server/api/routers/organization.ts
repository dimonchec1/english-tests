import { createTRPCRouter, publicProcedure, authenticatedProcedure } from "../trpc"
import { prisma } from '../../db'
import { z } from "zod"

export const generateApiSchema = z.object({
    organizationId: z.string(),
});

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
    generateApiToken: authenticatedProcedure
        .input(generateApiSchema)
        .mutation(async ({input}) => {
            const {organizationId} = input
            return 'token'
        })
})