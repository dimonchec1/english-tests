import { authOptions } from "@/server/auth";
import { prisma } from "@/server/db";
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import shajs from 'sha.js'

// new shajs.sha256().
let a = shajs('sha256').update('42').digest('hex')
console.log(shajs('sha256').update('').digest('hex'))

interface Data {
    name: string
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    const session = await getServerSession(req, res, authOptions)

    prisma.organization.findMany

    // if (!session) {
    //     res.status(401).json({ name: "You must be logged in." });
    //     return;
    // }

    switch (req.method) {
        case 'POST': {
            return res.json({
                name: 'Post',
           })
        } 
    }
  
    return res.json({
         name: 'Success',
    })
}