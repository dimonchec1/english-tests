import { createTRPCRouter, publicProcedure} from "../trpc"
import { prisma } from '../../db';
import { z } from "zod";

export const testRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({
            userId: z.string().cuid(),
            testName: z.string().max(64)
        }))
        .mutation(async ({input}) => {
            const {testName, userId} = input

            console.log('teasdfasdfasdfasdst')

            const testTemplate = await prisma.testTemplate.create({
                data: {
                    name: testName,
                    authorId: userId
                }
            })

            return testTemplate
        }),
    testTemplate: publicProcedure
        .input(z.object({
            testTemplateId: z.string().cuid()
        }))
        .query(async ({input}) => {
            const {testTemplateId} = input

            const testTemplate = await prisma.testTemplate.findFirst({
                where: {id: testTemplateId}
            })

            return testTemplate
        }),
    testTemplates: publicProcedure
        .query(async () => {
            const testTemplates = await prisma.testTemplate.findMany()

            return testTemplates
        })
})