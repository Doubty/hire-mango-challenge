'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Container, Box, Typography, Paper, Stack, Button, Divider } from '@mui/material';
import { CheckCircle, ArrowBack, Dashboard, Refresh } from '@mui/icons-material';
import Link from 'next/link';
import MainLayout from '@/app/components/Layout/MainLayout';
import { useFormData, useWizardStore } from '@/app/store/wizardStore';

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const workspaceSlug = searchParams.get('workspace');
  const formData = useFormData();
  const { resetWizard } = useWizardStore();

  const handleRestart = () => {
    resetWizard();
    router.push('/wizard');
  };

  const workspaceName = formData.workspaceDetails?.workspaceName || 'Your Workspace';
  const workspaceUrl = workspaceSlug
    ? `${workspaceSlug}.workspace.app`
    : `${formData.workspaceDetails?.workspaceSlug || 'workspace'}.workspace.app`;

  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
        <Paper elevation={0} sx={{ p: { xs: 3, sm: 5 }, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <CheckCircle
              sx={{
                fontSize: 80,
                color: 'success.main',
                mb: 2,
              }}
            />
            <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
              Welcome to {workspaceName}!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
              Your workspace has been successfully created and is ready to use.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Stack spacing={3} sx={{ mb: 4, textAlign: 'left' }}>
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Workspace Name
              </Typography>
              <Typography variant="h6">{workspaceName}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Workspace URL
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                {workspaceUrl}
              </Typography>
            </Box>
            {formData.personalInfo && (
              <Box>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Account Email
                </Typography>
                <Typography variant="body1">{formData.personalInfo.email}</Typography>
              </Box>
            )}
            {formData.workspaceDetails?.type && (
              <Box>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Workspace Type
                </Typography>
                <Typography variant="body1">{formData.workspaceDetails.type}</Typography>
              </Box>
            )}
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={handleRestart}
              fullWidth={{ xs: true, sm: false }}
            >
              Create New Workspace
            </Button>
            <Button
              variant="contained"
              startIcon={<Dashboard />}
              fullWidth={{ xs: true, sm: false }}
              onClick={() => {
                // In a real app, this would navigate to the workspace dashboard
                alert('This would navigate to your workspace dashboard!');
              }}
            >
              Go to Dashboard
            </Button>
          </Stack>
        </Paper>
      </Container>
    </MainLayout>
  );
}
