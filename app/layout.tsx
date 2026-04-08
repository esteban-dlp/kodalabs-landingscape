import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usekodalabs.com'),
  title: {
    default: 'Koda Labs | Software that removes friction',
    template: '%s | Koda Labs'
  },
  description: 'Koda Labs builds software, automation, and digital tools that help people and businesses simplify workflows, save time, and scale with better systems.',
  generator: 'Next.js',
  keywords: ['software development', 'automation', 'AI solutions', 'SaaS', 'digital platforms', 'custom software', 'business automation'],
  authors: [{ name: 'Koda Labs' }],
  creator: 'Koda Labs',
  publisher: 'Koda Labs',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://www.usekodalabs.com',
    siteName: 'Koda Labs',
    title: 'Koda Labs | Software that removes friction',
    description: 'We turn complex processes into simple systems. Build software, automation, and digital tools that simplify workflows and scale your business.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koda Labs | Software that removes friction',
    description: 'We turn complex processes into simple systems. Build software, automation, and digital tools that simplify workflows and scale your business.',
    creator: '@kodalabs',
  },
  alternates: {
    canonical: 'https://www.usekodalabs.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#171717',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <I18nProvider>
          {children}
        </I18nProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
