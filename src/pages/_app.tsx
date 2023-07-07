import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { api } from "@/utils/api"
import { MainLayout } from "@/application/layouts/MainLayout"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "@/styles/globals.css";
import { AuthLayout } from "@/application/layouts/AuthLayout"
import { LocalizationProvider } from "@mui/x-date-pickers"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
        <MainLayout>
            <AuthLayout>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Component {...pageProps} />
            </LocalizationProvider>
            </AuthLayout>
        </MainLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
