import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ScaleProvider } from '@/components/ScaleProvider'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IgnAIte',
  description: '認知科学コーチングとAIコンサルで全ての人の可能性を広げる',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <ScaleProvider />
        {children}
      </body>
    </html>
  )
}
