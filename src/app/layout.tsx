import type { Metadata } from 'next'
import { Inter, Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import LoadingProvider from '@/components/loading/LoadingProvider'

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Satya Pediatrics - Compassionate Pediatric Care',
  description:
    'Professional pediatric care with Dr. Satya. Comprehensive medical services for children with online appointment booking, consultation, and healthcare management.',
  keywords: [
    'pediatrics',
    'child healthcare',
    'doctor appointment',
    'pediatrician',
    'medical consultation',
    'healthcare portfolio',
    'Dr. Satya Pediatrics',
  ],
  authors: [{ name: 'Dr. Satya' }],
  creator: 'Dr. Satya Pediatrics',
  publisher: 'Dr. Satya Pediatrics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dr-satya-pediatrics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Satya Pediatrics - Compassionate Pediatric Care',
    description:
      'Professional pediatric care with Dr. Satya. Comprehensive medical services for children.',
    url: 'https://dr-satya-pediatrics.com',
    siteName: 'Dr. Satya Pediatrics',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Satya Pediatrics - Professional Healthcare',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Satya Pediatrics - Compassionate Pediatric Care',
    description:
      'Professional pediatric care with comprehensive medical services for children.',
    images: ['/og-image.jpg'],
    creator: '@dr_satya_pediatrics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />

        {/* Preconnect to improve font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Viewport meta for responsive design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LoadingProvider>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
