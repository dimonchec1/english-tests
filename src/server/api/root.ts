import { createTRPCRouter } from "@/server/api/trpc";
import { eventRouter } from "./routers/event";
import { userRouter } from './routers/user';
import { organizationRouter } from "./routers/organization";
import { enrollmentRouter } from "./routers/enrollment";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  event: eventRouter,
  organization: organizationRouter,
  enrollment: enrollmentRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
