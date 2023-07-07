import { createTRPCRouter, publicProcedure, authenticatedProcedure } from "../trpc"
import { prisma } from '../../db'
import { z } from "zod"
import { randomUUID } from "crypto"
import { OrganizationTableInfoType } from "@/features/organization/organizationsTable/OrganizationsTable";

export const generateApiSchema = z.object({
    organizationId: z.string(),
});

export const organizationRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async () => {
            const organizations = await prisma.organization.findMany({
                
                include: {
                    members: {
                        include: {
                            _count: {
                                select: {
                                    event: true
                                }
                            }
                        }
                    }
                }
            })


            const formattedOrganizations: OrganizationTableInfoType[] = organizations.map(organization => ({
                organizationId: organization.id,
                createdAt: organization.createdAt,
                organizationName: organization.name,
                organizationMembersCount: organization.members.length,
                totalEventsCount: organization.members.reduce((acc, user) => acc + user._count.event, 0)
            }))

            return formattedOrganizations
        }),
    organization: publicProcedure
        .input(z.object({
            organizationId: z.string()
        }))
        .query(async ({input}) => {
            const {organizationId} = input

            const organization = await prisma.organization.findFirst({

                include: {
                    members: {
                        include: {
                            _count: {
                                select: {
                                    event: true
                                }
                            }
                        }
                    }
                },
                where: {
                id: organizationId,
            }})

            return organization
        }),
    users: publicProcedure
        .input(z.object({
            organizationId: z.string()
        }))
        .query(async ({input}) => {
            const {organizationId} = input
            const users = await prisma.organizationMember.findMany({ 
                include: {
                    user: true
                },
                where: {
                    organizationId
                }
            })

            return users
        }),
    assignUser: publicProcedure
        .input(z.object({
            organizationId: z.string(),
            userId: z.string()
        }))
        .mutation(async ({input}) => {
            const {organizationId, userId} = input

            prisma.organizationMember.create({
                data: {
                    organizationId,
                    userId
                }
            })
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

            return randomUUID()
        })
})