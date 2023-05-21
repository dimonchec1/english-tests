import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { api } from "@/utils/api"
import { MainLayout } from "@/application/layouts/MainLayout"

import "@/styles/globals.css";
import { AuthLayout } from "@/application/layouts/AuthLayout"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
        <MainLayout>
            <AuthLayout>
                <Component {...pageProps} />
            </AuthLayout>
        </MainLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
