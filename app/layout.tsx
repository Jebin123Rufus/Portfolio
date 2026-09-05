import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jebin Rufus R (Rufuzz) — Cybersecurity & Software Engineering Portfolio',
  description:
    'Personal portfolio of Jebin Rufus R (Rufuzz) — Cybersecurity Researcher and Software Engineer specializing in Penetration Testing, Wi-Fi 802.11 Analysis, Linux Automation, and AI-driven Threat Intelligence.',
  keywords: [
    'Jebin Rufus R',
    'Rufuzz',
    'Cybersecurity',
    'Security Researcher',
    'Software Engineer',
    'Penetration Testing',
    'Linux System Administration',
    'Scapy',
    'Python',
    'React',
    'Threat Intelligence',
    'Deauth-Defense',
    'CitadelDB',
    'TryHackMe Legend',
  ],
  authors: [{ name: 'Jebin Rufus R (Rufuzz)' }],
  creator: 'Rufuzz',
  openGraph: {
    title: 'Rufuzz — Systems × Security × Strategy',
    description:
      'Explore the interactive portfolio of Rufuzz featuring live 3D cyber core, HUD skill matrix, zsh cyber terminal, production security projects, and tactical engineering systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rufuzz Cyber Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rufuzz — Systems × Security × Strategy',
    description: 'Software Engineering & Cybersecurity Portfolio',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased bg-[#000000] text-slate-100 selection:bg-rose-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
