import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '@/components/Layout'
import { RouteGuard } from '@/components/RouteGuard'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </AppLayout>
  ) 
}
