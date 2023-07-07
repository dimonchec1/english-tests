import { createTRPCRouter, publicProcedure} from "../trpc"
import { prisma } from '../../db';
import { z } from "zod";

export const eventRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({
            userId: z.string().cuid(),
            testName: z.string().max(64)
        }))
        .mutation(async ({input}) => {
            const {testName, userId} = input

            console.log(userId)

            const user = await prisma.user.findFirst({
                where: {
                    id: userId,
                },
                include: {
                    organizations: {
                        'include': {
                            event: true
                        }
                    }
                    
                },
            })

            const entityHasEventId = user?.organizations[0]?.event[0]?.id

            const event = await prisma.event.create({
                data: {
                    name: testName,
                    eventAuthorId: entityHasEventId || ''
                }
            })

            return event.id
        }),
    event: publicProcedure
        .input(z.object({
            eventId: z.string().cuid()
        }))
        .query(async ({input}) => {
            const {eventId} = input

            const event = await prisma.event.findFirst({
                where: {id: eventId}
            })

            return event
        }),
    events: publicProcedure
        .query(async () => {
            const events = await prisma.event.findMany()

            return events
        })
})