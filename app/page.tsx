'use client';

import { useRouter } from 'next/navigation';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import MainLayout from '@/app/components/Layout/MainLayout';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/wizard');
  };

  return (
    <MainLayout>
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            py: 8,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight={700}
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Create Your Workspace
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, fontSize: { xs: '1rem', sm: '1.25rem' } }}
          >
            Get started by creating and configuring your workspace account in just a few simple steps.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={handleGetStarted}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </MainLayout>
  );
}
