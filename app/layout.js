import { JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { profile } from '@/data/profile';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata = {
  metadataBase: new URL(profile.website || 'https://abirhasanarko.dev'),
  title: {
    default: `${profile.name} — ${profile.tagline}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.bio,
  keywords: [
    'Abir Hasan Arko',
    'KUET',
    'Software Engineer',
    'AI',
    'Backend',
    'Portfolio',
    'Bangladesh',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.website,
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.shortBio,
    siteName: profile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.shortBio,
    creator: '@AbirHasanArko',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F0E8' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A2E' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${display.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}