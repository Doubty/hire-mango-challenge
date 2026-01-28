'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Paper, Stack, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useFormData } from '@/app/store/wizardStore';
import SuccessAnimation from './SuccessAnimation';
import CountdownTimer from './CountdownTimer';

export default function StepSuccess() {
  const router = useRouter();
  const formData = useFormData();

  const handleRedirect = () => {
    router.push(`/success?workspace=${formData.workspaceDetails?.workspaceSlug || ''}`);
  };

  useEffect(() => {
    // Auto-redirect after countdown
    const timer = setTimeout(() => {
      handleRedirect();
    }, 5000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 }, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SuccessAnimation />
        <Typography variant="h4" component="h2" fontWeight={600} gutterBottom>
          Workspace Created Successfully!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
          Your workspace <strong>{formData.workspaceDetails?.workspaceName}</strong> has been
          created. You can now start using all the features.
        </Typography>
        <Stack spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'action.hover',
              borderRadius: 2,
              textAlign: 'left',
            }}
          >
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Workspace URL:
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
              {formData.workspaceDetails?.workspaceSlug}.workspace.app
            </Typography>
          </Box>
          <CountdownTimer onComplete={handleRedirect} />
          <Button variant="contained" size="large" onClick={handleRedirect} fullWidth>
            Go to Workspace Now
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
