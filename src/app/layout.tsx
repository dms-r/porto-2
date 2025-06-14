import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'ElegantFolio - Web Developer Portfolio',
    template: '%s | ElegantFolio',
  },
  description: 'Welcome to the professional web development portfolio of a creative and skilled developer. Explore projects, skills, and experience.',
  keywords: ['web developer', 'portfolio', 'react', 'nextjs', 'tailwindcss', 'typescript', 'full stack developer', 'frontend developer', 'backend developer'],
  authors: [{ name: 'Candidate Name' }], // Replace with actual name
  creator: 'Candidate Name', // Replace with actual name
  openGraph: {
    title: 'ElegantFolio - Web Developer Portfolio',
    description: 'Discover innovative web solutions and a passion for development.',
    type: 'website',
    locale: 'en_US',
    // url: 'YOUR_DEPLOYED_URL_HERE', // Replace with actual URL when deployed
    // siteName: 'ElegantFolio',
    // images: [ // Add a default OG image
    //   {
    //     url: 'YOUR_OG_IMAGE_URL_HERE', // Replace with actual URL
    //     width: 1200,
    //     height: 630,
    //     alt: 'ElegantFolio Logo',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElegantFolio - Web Developer Portfolio',
    description: 'Explore a collection of web development projects and skills.',
    // site: '@yourtwitterhandle', // Replace with actual Twitter handle
    // creator: '@yourtwitterhandle',
    // images: ['YOUR_TWITTER_IMAGE_URL_HERE'], // Replace with actual URL
  },
  robots: { // Basic SEO robots configuration
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
  // manifest: '/manifest.json', // If you have a manifest file
  // icons: { // Favicon setup
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
