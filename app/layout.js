import { JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { profile } from '@/data/profile';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('arko-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = (stored === 'light' || stored === 'dark') ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (_) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

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
    <html lang="en" className={`${mono.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}