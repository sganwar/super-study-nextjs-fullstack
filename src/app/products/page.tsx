import type { Metadata } from 'next';
import ProductsClientView from './ProductsClientView';

export const metadata:Metadata = {
  // 1. PRIMARY METADATA (For SEO / Google Search Results)
  title: 'Our Educational Apps & Products - Super Study',
  description: 'Explore Super Study educational apps: Super Intelligent App for learning and Super Gold App for financial education. Download from Play Store.',
  alternates: {
    canonical: 'https://www.superstudy.co.in/products',
  },

  // 2. OPEN GRAPH METADATA (For Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Super Study Apps - Educational Mobile Applications',
    description: 'Download our educational apps: Super Intelligent App for comprehensive learning and Super Gold App for financial literacy education.',
    url: 'https://www.superstudy.co.in/products',
    siteName: 'Super Study',
    type: 'website',
    images: [
      {
        url: 'https://www.superstudy.co.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Super Study Educational Apps - Super Intelligent & Super Gold Apps',
      },
    ],
  },
}

export default function ProductsPage() {
  return <ProductsClientView />;
}