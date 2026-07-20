import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UNIVO — Empowering Students Beyond The Classroom',
  description: 'UNIVO is a student-focused digital platform providing access to educational opportunities, resources, career guidance, innovation programs, and community support.',
  keywords: ['student platform', 'education', 'career guidance', 'scholarships', 'innovation', 'UNIVO', 'Africa', 'university'],
  authors: [{ name: 'UNIVO Team' }],
  openGraph: {
    title: 'UNIVO — Empowering Students Beyond The Classroom',
    description: 'Your gateway to educational opportunities, career growth, and student innovation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'UNIVO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIVO — Empowering Students',
    description: 'Your gateway to educational opportunities, career growth, and student innovation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-navy-950 text-navy-950 dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
