import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['800', '500', '300'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio Wendeson',
  description: 'Portfolio do meupa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className={`h-screen w-screen bg-[url('../../public/backgroundLigth.svg')] dark:bg-[url('../../public/backgroundDark.svg')] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
