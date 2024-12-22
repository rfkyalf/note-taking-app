import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import ProgressBarProviders from '@/providers/ProgressBar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Notes App | Keep Your Thoughts',
    template: '%s | Notes App',
  },
  description:
    'NotesApp makes it easy to jot down ideas, tasks, and important moments quickly and securely. Keep personal notes or share them publicly—all in one place.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Notes App | Keep Your Thoughts',
    description:
      'NotesApp makes it easy to jot down ideas, tasks, and important moments quickly and securely. Keep personal notes or share them publicly—all in one place.',
    images: '/opengraph-image.png',
    url: 'https://notesapp-v2.vercel.app/',
    siteName: 'Notes App | Keep Your Thoughts',
    locale: 'en-US',
    type: 'website',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#262626',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} antialiased`}>
          <ProgressBarProviders>
            {children} <Toaster />
          </ProgressBarProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
