import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Fira_Sans_Condensed } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const firaSansCondensed = Fira_Sans_Condensed({
  variable: '--font-main',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'The Artisan Kiln',
  description: 'Interactive ceramic tile order form',
}

type RootLayoutProps = Readonly<{
  children: ReactNode
}>

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={firaSansCondensed.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
