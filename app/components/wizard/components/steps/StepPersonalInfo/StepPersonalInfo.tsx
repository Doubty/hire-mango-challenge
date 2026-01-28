'use client';

import { Box, Typography, Paper } from '@mui/material';
import { Person } from '@mui/icons-material';
import { useWizardStore, useFormData } from '@/app/store/wizardStore';
import PersonalInfoForm from './PersonalInfoForm';
import type { PersonalInfo } from '@/app/types/wizard';

export default function StepPersonalInfo() {
  const { updatePersonalInfo, setStepValidation } = useWizardStore();
  const formData = useFormData();

  const handleSubmit = (data: PersonalInfo) => {
    updatePersonalInfo(data);
  };

  const handleValidationChange = (isValid: boolean) => {
    setStepValidation(1, isValid);
  };

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Person color="primary" sx={{ fontSize: 32 }} />
        <Typography variant="h5" component="h2" fontWeight={600}>
          Personal Information
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Let's start by setting up your personal account details.
      </Typography>
      <PersonalInfoForm
        defaultValues={formData.personalInfo}
        onSubmit={handleSubmit}
        onValidationChange={handleValidationChange}
      />
    </Paper>
  );
}
