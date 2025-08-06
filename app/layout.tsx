import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Montserrat } from 'next/font/google';
import { Providers } from './providers'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap'
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Elite Motors - Luxury Car Showroom | Premium Automotive Experience',
  description: 'Discover the finest collection of luxury vehicles at Elite Motors. Experience premium automotive excellence with personalized service and cutting-edge technology.',
  keywords: 'luxury cars, premium vehicles, car showroom, automotive excellence, luxury automotive, high-end cars',
  openGraph: {
    title: 'Elite Motors - Luxury Car Showroom',
    description: 'Experience automotive excellence with our premium collection of luxury vehicles.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Motors - Luxury Car Showroom',
    description: 'Experience automotive excellence with our premium collection of luxury vehicles.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://elitemotors.com',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="font-montserrat bg-jet-black text-ice-silver antialiased">
         <Providers>{children}</Providers>
      </body>
    </html>
  );
}