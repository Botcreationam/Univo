import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://univo.vercel.app'),
  title: 'UNIVO | Your campus, connected.',
  description: 'UNIVO is the social network connecting students across Zambia to campus, communities, study tools, marketplace, and opportunities.',
  keywords: ['student platform', 'social network', 'Zambia', 'campus', 'communities', 'study tools', 'marketplace', 'opportunities', 'UNIVO'],
  authors: [{ name: 'UNIVO' }],
  openGraph: {
    title: 'UNIVO | Your campus, connected.',
    description: 'The social network connecting Zambian students to campus, communities, study tools, marketplace, and opportunities.',
    type: 'website',
    locale: 'en_US',
    siteName: 'UNIVO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIVO | Your campus, connected.',
    description: 'Connecting Zambian students to campus, communities, study tools, marketplace, and opportunities.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased bg-white dark:bg-navy-950 text-navy-900 dark:text-navy-50`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
