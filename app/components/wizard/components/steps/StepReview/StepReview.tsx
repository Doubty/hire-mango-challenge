'use client';

import { useEffect } from 'react';
import { Box, Typography, Paper, Stack, Button } from '@mui/material';
import { RateReview as ReviewIcon, Edit } from '@mui/icons-material';
import { useWizardStore, useFormData, useIsSubmitting } from '@/app/store/wizardStore';
import ReviewCard from './ReviewCard';
import ReviewSection from './ReviewSection';
import NavigationButton from '../../WizardNavigation/NavigationButton';

export default function StepReview() {
  const { goToStep, submitWizard, setStepValidation } = useWizardStore();
  const formData = useFormData();
  const isSubmitting = useIsSubmitting();

  // Validate that all previous steps have data
  useEffect(() => {
    const isValid = !!(
      formData.personalInfo &&
      formData.workspaceDetails &&
      formData.preferences
    );
    setStepValidation(4, isValid);
  }, [formData, setStepValidation]);

  const handleEdit = (step: number) => {
    goToStep(step as any);
  };

  const handleSubmit = async () => {
    await submitWizard();
  };

  const personalInfoData = formData.personalInfo
    ? {
        'Full Name': formData.personalInfo.fullName,
        Email: formData.personalInfo.email,
        Password: '••••••••',
      }
    : {};

  const workspaceData = formData.workspaceDetails
    ? {
        'Workspace Name': formData.workspaceDetails.workspaceName,
        'Workspace URL': `${formData.workspaceDetails.workspaceSlug}.workspace.app`,
        Description: formData.workspaceDetails.description || 'Not provided',
        Type: formData.workspaceDetails.type,
      }
    : {};

  const preferencesData = formData.preferences
    ? {
        Theme: formData.preferences.theme,
        Language: formData.preferences.language,
        Timezone: formData.preferences.timezone,
        'Email Notifications': formData.preferences.notifications.email,
        'Push Notifications': formData.preferences.notifications.push,
        'SMS Notifications': formData.preferences.notifications.sms,
      }
    : {};

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <ReviewIcon color="primary" sx={{ fontSize: 32 }} />
        <Typography variant="h5" component="h2" fontWeight={600}>
          Review Your Information
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Please review all the information before submitting. You can edit any section by clicking the Edit button.
      </Typography>
      <Stack spacing={3}>
        <ReviewCard
          title="Personal Information"
          actionButton={
            <Button
              size="small"
              startIcon={<Edit />}
              onClick={() => handleEdit(1)}
              variant="outlined"
            >
              Edit
            </Button>
          }
        >
          <ReviewSection title="" data={personalInfoData} />
        </ReviewCard>

        <ReviewCard
          title="Workspace Details"
          actionButton={
            <Button
              size="small"
              startIcon={<Edit />}
              onClick={() => handleEdit(2)}
              variant="outlined"
            >
              Edit
            </Button>
          }
        >
          <ReviewSection title="" data={workspaceData} />
        </ReviewCard>

        <ReviewCard
          title="Preferences"
          actionButton={
            <Button
              size="small"
              startIcon={<Edit />}
              onClick={() => handleEdit(3)}
              variant="outlined"
            >
              Edit
            </Button>
          }
        >
          <ReviewSection title="" data={preferencesData} />
        </ReviewCard>
      </Stack>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <NavigationButton
          variant="primary"
          onClick={handleSubmit}
          loading={isSubmitting}
        >
          Create Workspace
        </NavigationButton>
      </Box>
    </Paper>
  );
}
