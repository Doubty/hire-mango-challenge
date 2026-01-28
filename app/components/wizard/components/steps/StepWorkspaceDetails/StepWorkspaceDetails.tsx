'use client';

import { Box, Typography, Paper } from '@mui/material';
import { Business } from '@mui/icons-material';
import { useWizardStore, useFormData } from '@/app/store/wizardStore';
import WorkspaceForm from './WorkspaceForm';
import type { WorkspaceDetails } from '@/app/types/wizard';

export default function StepWorkspaceDetails() {
  const { updateWorkspaceDetails, setStepValidation } = useWizardStore();
  const formData = useFormData();

  const handleSubmit = (data: WorkspaceDetails) => {
    updateWorkspaceDetails(data);
  };

  const handleValidationChange = (isValid: boolean) => {
    setStepValidation(2, isValid);
  };

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Business color="primary" sx={{ fontSize: 32 }} />
        <Typography variant="h5" component="h2" fontWeight={600}>
          Workspace Details
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Configure your workspace name, URL, and type.
      </Typography>
      <WorkspaceForm
        defaultValues={formData.workspaceDetails}
        onSubmit={handleSubmit}
        onValidationChange={handleValidationChange}
      />
    </Paper>
  );
}
