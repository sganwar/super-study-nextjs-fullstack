import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Grid
} from '@mui/material';
import { 
  Home as HomeIcon,
  School as SchoolIcon,
  SearchOff as SearchOffIcon
} from '@mui/icons-material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box className="min-h-screen bg-gradient-to-br from-edu-primary/10 via-edu-light to-edu-sky/20 flex items-center justify-center p-4">
      <Container maxWidth="md">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Illustration/Icon Section */}
          <Grid item xs={12} md={6} className="text-center">
            <Box className="relative">
              <Box className="w-48 h-48 mx-auto mb-8 relative">
                {/* Main Icon */}
                <Box className="absolute inset-0 bg-edu-primary/20 rounded-full animate-pulse"></Box>
                <Box className="absolute inset-4 bg-edu-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></Box>
                <SearchOffIcon 
                  className="absolute inset-0 m-auto text-6xl text-edu-primary"
                  style={{ fontSize: '6rem' }}
                />
              </Box>
              
              {/* Floating Elements */}
              <Box className="absolute -top-4 -left-4 w-16 h-16 bg-edu-secondary/20 rounded-full animate-bounce"></Box>
              <Box className="absolute -bottom-2 -right-4 w-12 h-12 bg-edu-accent/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></Box>
              <Box className="absolute top-12 -right-8 w-10 h-10 bg-edu-success/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></Box>
            </Box>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={6}>
            <Box className="text-center md:text-left">
              {/* Error Code */}
              <Typography 
                variant="h1" 
                className="font-bold text-edu-primary mb-4 !font-minimal"
                sx={{ 
                  fontSize: { xs: '6rem', md: '8rem' },
                  background: 'linear-gradient(135deg, #1565C0 0%, #42A5F5 50%, #7B1FA2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                404
              </Typography>

              {/* Title */}
              <Typography 
                variant="h3" 
                className="font-bold text-gray-800 mb-4 !font-display"
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
              >
                Oops! Page Not Found
              </Typography>

              {/* Description */}
              <Typography 
                variant="h6" 
                className="text-gray-600 mb-8 leading-relaxed !font-body"
              >
                It seems the educational resource you&apos;re looking for has moved or doesn&apos;t exist. 
                Let&apos;s get you back to learning and making a difference!
              </Typography>

              {/* Action Buttons */}
              <Box className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  component={Link}
                  href="/"
                  variant="contained"
                  size="large"
                  startIcon={<HomeIcon />}
                  className="bg-edu-primary hover:bg-edu-dark text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Back to Home
                </Button>
                
                <Button
                  component={Link}
                  href="/products"
                  variant="outlined"
                  size="large"
                  startIcon={<SchoolIcon />}
                  className="border-edu-primary text-edu-primary hover:bg-edu-primary/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Explore Products
                </Button>
              </Box>

              {/* Quick Stats */}
              <Box className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-edu-primary/20">
                <Typography variant="body2" className="text-gray-600 mb-2 !font-accent">
                  While you&apos;re here, remember:
                </Typography>
                <Grid container spacing={2} className="text-center">
                  <Grid item xs={4}>
                    <Typography variant="h6" className="text-edu-primary font-bold">500+</Typography>
                    <Typography variant="caption" className="text-gray-600">Kits Donated</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" className="text-edu-secondary font-bold">₹99</Typography>
                    <Typography variant="caption" className="text-gray-600">Per Kit</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" className="text-edu-success font-bold">50+</Typography>
                    <Typography variant="caption" className="text-gray-600">Schools</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}