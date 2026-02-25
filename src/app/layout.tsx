import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://23f-desclasificado.vercel.app'),
  title: {
    default: '23-F Desclasificado',
    template: '%s | 23-F Desclasificado',
  },
  description:
    '154 documentos desclasificados sobre el intento de golpe de estado del 23 de febrero de 1981 en España.',
  keywords: [
    '23-F',
    'golpe de estado',
    'España',
    '1981',
    'desclasificado',
    'Tejero',
    'documentos secretos',
  ],
  authors: [{ name: '23-F Desclasificado' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    siteName: '23-F Desclasificado',
    title: '23-F Desclasificado — Los documentos secretos del golpe de estado',
    description:
      '154 documentos desclasificados por el Consejo de Ministros de España, 45 años después del intento de golpe de estado del 23 de febrero de 1981.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '23-F Desclasificado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '23-F Desclasificado',
    description:
      '154 documentos desclasificados sobre el golpe de estado del 23-F.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Instrument Serif and Source Serif 4 via Google Fonts link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '23-F Desclasificado',
              url: 'https://23f-desclasificado.vercel.app',
              description:
                '154 documentos desclasificados sobre el intento de golpe de estado del 23 de febrero de 1981 en España.',
              inLanguage: ['es', 'en'],
              publisher: {
                '@type': 'Organization',
                name: '23-F Desclasificado',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased
          bg-paper-50 dark:bg-dark-900
          text-ink-900 dark:text-paper-100
          transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
