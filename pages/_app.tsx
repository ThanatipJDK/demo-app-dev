import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '@/components/Layout'
import { RouteGuard } from '@/components/RouteGuard'
import { AuthProvider } from '@/components/AuthContext'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      {/* <RouteGuard> */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      {/* </RouteGuard> */}
    </AppLayout>
  ) 
}
