import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'
import Footer from '@/components/Footer'

const meta = {
  title: 'Skorobohatov Sviatoslav - Blog',
  description:
    'FS Engineer from Ukraine, but in Romania. Lover of Coffee and Metal',
  image: `${WEBSITE_HOST_URL}/og-preview.svg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Skorobohatov Sviatoslav',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="sticky top-0 z-50 py-4 backdrop-blur">
            <Container>
              <div className="flex items-center justify-between pb-2 pt-1">
                <Navigation />
                <ThemeSwitch />
              </div>
            </Container>
          </header>
          <main>
            <Container>{children}</Container>
          </main>
          <footer className="py-16">
            <Container>
              <Footer />
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
