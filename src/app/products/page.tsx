import type { Metadata } from 'next';
import ProductsClientView from './ProductsClientView';

export const metadata: Metadata = {
  // 1. PRIMARY METADATA (For SEO / Google Search Results)
  title: 'Contact Super Study - Support & Donation Queries',
  description: 'Get in touch with Super Study team. Email: supergoldapp@gmail.com, Helpline: +91 74838 94715. Support for donations, refunds, and educational kit queries.',
  alternates: {
    canonical: 'https://www.superstudy.co.in/contact',
  },

  // 2. OPEN GRAPH METADATA (For Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Contact Super Study - Support & Help',
    description: 'Reach Super Study for donation support, refund requests, and educational kit queries. Email and phone support available.',
    url: 'https://www.superstudy.co.in/contact',
    siteName: 'Super Study',
    type: 'website',
    images: [
      {
        url: 'https://www.superstudy.co.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Super Study - Educational Kits Support',
      },
    ],
  },

  // 3. TWITTER CARD METADATA (For X/Twitter)
  twitter: {
    card: 'summary_large_image',
    site: '@superstudy',
    creator: '@superstudy',
    title: 'Contact Super Study Support Team',
    description: 'Get help with donations, refunds, and educational kit deliveries. Multiple support channels available.',
    images: ['https://www.superstudy.co.in/logo.png'],
  },
}

export default function ProductsPage() {
  return <ProductsClientView />;
}