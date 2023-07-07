import { prisma } from "@/server/db";
import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
    name?: string
}

interface UserResults {
    verificationCenterData: {
        userId: string
        eventId: string
    }
    results: Record<string, string>
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const {
            results,
            verificationCenterData
        } = req.body as UserResults

        const {
            eventId,
            userId
        } = verificationCenterData

        await prisma.userEnrollment.create({
            data: {
                userId,
                eventId,
                result: results as Prisma.JsonObject
            }
        })
    }

    res.status(200).json({ name: 'John Doe' })
}