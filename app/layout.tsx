import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'STAYLOOM | Premium Property Management in Fort Myers, FL',
  description:
    'STAYLOOM manages your property as a premium short-term rental, handles everything from guest booking to cleaning, and pays you guaranteed rent every month. Serving Fort Myers, Cape Coral, Bonita Springs and Naples.',
  keywords:
    'property management Fort Myers, short-term rental management Florida, guaranteed rent, vacation rental management Southwest Florida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-jost">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
