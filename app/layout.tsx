import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usekodalabs.com'),
  title: {
    default: 'Koda Labs | Launch your landing page in hours, not weeks',
    template: '%s | Koda Labs'
  },
  description: 'Modern landing pages designed to convert visitors into clients. Get your business online fast with a professional landing page built in hours.',
  generator: 'Next.js',
  keywords: ['landing pages', 'web design', 'business websites', 'small business', 'restaurant websites', 'local business', 'landing page builder'],
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
    title: 'Koda Labs | Launch your landing page in hours, not weeks',
    description: 'Modern landing pages designed to convert visitors into clients. Get your business online fast with a professional landing page.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koda Labs | Launch your landing page in hours, not weeks',
    description: 'Modern landing pages designed to convert visitors into clients. Get your business online fast with a professional landing page.',
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
  themeColor: '#F7F6F3',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <I18nProvider>
          {children}
        </I18nProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
