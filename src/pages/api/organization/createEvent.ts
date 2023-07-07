import { prisma } from "@/server/db";
import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
    result?: string
}

interface EventCreation {
    eventName: string
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    // if (req.method === 'POST') {
    //     console.log('hi')
    //     const {
    //         eventName
    //     } = req.body as EventCreationDto

    //     await prisma.event.create({
    //         data: {
    //             name: eventName,
    //         }
    //     })
    //     console.log('hi')
    // }

    res.status(200).json({ result: 'Event created' })
}