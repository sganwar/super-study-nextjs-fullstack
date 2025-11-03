// src/app/contact/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  Help as HelpIcon 
} from '@mui/icons-material';

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

export default function ContactUs() {
  return (
    <Box className="min-h-screen bg-edu-light/50 py-16">
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          className="font-bold text-center text-edu-primary !mb-10 !font-minimal" 
          sx={{fontSize:{xs:'2rem',md:'2.5rem'}}}
        >
          Get In Touch
        </Typography>
        
        <Box className="text-center mb-12">
            <Typography variant="h6" className="text-gray-700 leading-relaxed !font-body">
                We&apos;re here to answer any questions about your donation, our mission, or support for needy students.
            </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Email Card */}
          <Grid item xs={12} md={6}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-edu-light">
              <CardContent className="text-center p-8">
                <Box className="w-16 h-16 mx-auto mb-4 rounded-full bg-edu-primary/10 flex items-center justify-center text-edu-primary">
                  <EmailIcon className="text-3xl" />
                </Box>
                <Typography variant="h6" className="font-bold mb-2 text-edu-dark">
                  Email Support
                </Typography>
                <Typography variant="body1" className="text-gray-700 font-bold">
                  supergoldapp@gmail.com
                </Typography>
                <Typography variant="body2" className="text-gray-600 mt-1">
                  (Best for all queries, including refund requests)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Phone Card */}
          <Grid item xs={12} md={6}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-edu-light">
              <CardContent className="text-center p-8">
                <Box className="w-16 h-16 mx-auto mb-4 rounded-full bg-edu-primary/10 flex items-center justify-center text-edu-primary">
                  <PhoneIcon className="text-3xl" />
                </Box>
                <Typography variant="h6" className="font-bold mb-2 text-edu-dark">
                  Helpline
                </Typography>
                <Typography variant="body1" className="text-gray-700 font-bold">
                  +91 74838 94715
                </Typography>
                <Typography variant="body2" className="text-gray-600 mt-1">
                  (Available Mon-Fri, 10 AM - 5 PM IST And Sat, 10 AM - 12 PM IST)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box className="mt-12 text-center p-8 bg-edu-sky/20 rounded-xl">
            <Typography variant="h6" className="font-bold text-edu-dark !font-body flex items-center justify-center">
              <HelpIcon fontSize='large' className="mr-2 text-edu-primary" /> Urgent Payment Queries
            </Typography>
            <Typography variant="body1" className="text-gray-700 mt-2">
                For mistaken payment refund requests, please email us within **24 hours** of the transaction with all details.
            </Typography>
        </Box>
      </Container>
    </Box>
  );
}