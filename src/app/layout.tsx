
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'ElegantFolio - Dimas Refaldy Portfolio',
    template: '%s | ElegantFolio - Dimas Refaldy',
  },
  description: 'Welcome to the professional portfolio of Dimas Refaldy, a passionate IT enthusiast and high school graduate. Explore projects, skills, and experience.',
  keywords: ['IT support', 'network technology', 'hardware troubleshooting', 'software configuration', 'Dimas Refaldy', 'portfolio', 'fresh graduate', 'technical support'],
  authors: [{ name: 'Dimas Refaldy' }],
  creator: 'Dimas Refaldy',
  openGraph: {
    title: 'ElegantFolio - Dimas Refaldy Portfolio',
    description: 'Discover Dimas Refaldy\'s journey in IT and network technology.',
    type: 'website',
    locale: 'en_US',
    // url: 'YOUR_DEPLOYED_URL_HERE', 
    // siteName: 'ElegantFolio',
    // images: [ 
    //   {
    //     url: 'YOUR_OG_IMAGE_URL_HERE', 
    //     width: 1200,
    //     height: 630,
    //     alt: 'ElegantFolio Logo',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElegantFolio - Dimas Refaldy Portfolio',
    description: 'Explore Dimas Refaldy\'s technical skills and projects.',
    // site: '@yourtwitterhandle', 
    // creator: '@yourtwitterhandle',
    // images: ['YOUR_TWITTER_IMAGE_URL_HERE'], 
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
  // manifest: '/manifest.json', 
  // icons: { 
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
