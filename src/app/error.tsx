'use client';

import { useEffect } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Refresh, Home } from '@mui/icons-material';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <Container maxWidth="md">
      <Box
      className="min-h-screen flex items-center justify-center py-4">
        <Paper
          elevation={8}
          className='p-6 text-center bg-white/95 backdrop-blur-sm max-w-lg w-full'
        >
          {/* Error Icon */}
          <Box
          className="w-20 h-20 rounded-full bg-red-500 mb-4 flex items-center justify-center mx-auto">
            <Typography variant="h4" className='text-white font-bold'>
              !
            </Typography>
          </Box>

          {/* Error Title */}
          <Typography variant="h5" component="h1" gutterBottom className='font-bold text-edu-primary mb-2'>
            Oops! Something went wrong
          </Typography>

          <Typography variant="h6" component="h1" gutterBottom className='font-bold text-edu-primary mb-2'>
            please inform us here: <span className='text-red-500' >+91 74838 94715</span>
          </Typography>

          {/* Error Message */}
          <Typography variant="body1" className='text-edu-secondary !mb-4 leading-relaxed' >
            We apologize for the inconvenience. An unexpected error has occurred in the application.
          </Typography>

          {/* Technical Details (Collapsible) */}
          <Paper
            variant="outlined"
            className='p-2 mb-4 bg-grey-50 text-left'>
            <Typography variant="caption" className='text-edu-secondary font-bold'>
              Error Details:
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'error.main', 
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              wordBreak: 'break-all',
              mt: 1
            }}>
              {error.message || 'Unknown error occurred'}
            </Typography>
            {error.digest && (
              <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1, display: 'block' }}>
                Error ID: {error.digest}
              </Typography>
            )}
          </Paper>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Refresh />}
              onClick={reset}
              size="small"
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontWeight: 'bold'
              }}
            >
              Try Again
            </Button>
            
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="/"
              startIcon={<Home />}
              size="small"
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontWeight: 'bold'
              }}
            >
              Go Home
            </Button>
          </Box>

          {/* Support Info */}
          <Typography variant="caption" sx={{ 
            color: 'text.secondary', 
            mt: 4,
            display: 'block'
          }}>
            If the problem persists, please contact our support team.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}