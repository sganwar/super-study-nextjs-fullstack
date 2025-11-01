import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. PRIMARY METADATA (For SEO / Google Search Results)
  title: 'Super Study - Donate Educational Kits & Transform Lives',
  description: 'Donate ₹99 educational kits to underprivileged students. Super Study provides textbooks, stationery, and courses to bridge the education gap in rural India.',
  alternates: {
    canonical: 'https://www.superstudy.co.in/',
  },
  // 2. OPEN GRAPH METADATA (For Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Super Study - Education Kits Donation Platform',
    description: 'Your ₹99 donation provides complete educational kits to needy students. Join us in making education accessible for all children.',
    url: 'https://www.superstudy.co.in/',
    siteName: 'Super Study',
    type: 'website',
    images: [
      {
        url: 'https://www.superstudy.co.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Super Study - Educational Kits Donation Platform Logo',
      },
    ],
  },
  // 3. TWITTER CARD METADATA (For X/Twitter)
  twitter: {
    card: 'summary_large_image',
    site: '@superstudy',
    creator: '@superstudy',
    title: 'Super Study - Donate Education Kits',
    description: 'Transform lives with ₹99 educational kit donations. Support underprivileged students across India.',
    images: ['https://www.superstudy.co.in/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}