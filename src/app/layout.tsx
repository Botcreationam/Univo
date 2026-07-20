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
  title: 'UNIVO | Empowering Students Beyond the Classroom',
  description: 'UNIVO connects students with educational opportunities, career guidance, scholarships, and innovation programs across Africa.',
  keywords: ['student platform', 'education', 'scholarships', 'career guidance', 'Africa', 'UNIVO'],
  authors: [{ name: 'UNIVO' }],
  openGraph: {
    title: 'UNIVO | Empowering Students Beyond the Classroom',
    description: 'Connecting students with opportunities, career guidance, and innovation programs across Africa.',
    type: 'website',
    locale: 'en_US',
    siteName: 'UNIVO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIVO | Empowering Students',
    description: 'Connecting students with opportunities across Africa.',
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
