import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '@/components/Layout'
import { RouteGuard } from '@/components/RouteGuard'
import { AuthProvider } from '@/components/AuthContext'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <AppLayout>
      {/* <RouteGuard> */}
     
        <Component {...pageProps} />
   
      {/* </RouteGuard> */}
    </AppLayout>
    </AuthProvider>
  ) 
}
