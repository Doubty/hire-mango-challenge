'use client';

import { Box, Stack } from '@mui/material';
import { useWizardStore, useCurrentStep, useIsSubmitting, useCurrentStepValidation } from '@/app/store/wizardStore';
import NavigationButton from './NavigationButton';

interface WizardNavigationProps {
  onNext?: () => boolean | Promise<boolean>;
  onBack?: () => void;
  showBack?: boolean;
  showNext?: boolean;
  nextLabel?: string;
  backLabel?: string;
}

export default function WizardNavigation({
  onNext,
  onBack,
  showBack = true,
  showNext = true,
  nextLabel = 'Next',
  backLabel = 'Back',
}: WizardNavigationProps) {
  const currentStep = useCurrentStep();
  const isSubmitting = useIsSubmitting();
  const isStepValid = useCurrentStepValidation();
  const { previousStep, nextStep } = useWizardStore();

  const handleNext = async () => {
    if (!isStepValid) return;
    if (onNext) {
      const canProceed = await onNext();
      if (!canProceed) return;
    }
    nextStep();
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      previousStep();
    }
  };

  return (
    <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: 'divider' }}>
      <Stack
        direction={{ xs: 'column-reverse', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
      >
        {showBack && currentStep > 1 && (
          <NavigationButton variant="secondary" onClick={handleBack} disabled={isSubmitting}>
            {backLabel}
          </NavigationButton>
        )}
        {showNext && currentStep < 5 && (
          <NavigationButton
            variant="primary"
            onClick={handleNext}
            loading={isSubmitting}
            disabled={!isStepValid || isSubmitting}
            sx={{ ml: { xs: 0, sm: 'auto' } }}
          >
            {nextLabel}
          </NavigationButton>
        )}
      </Stack>
    </Box>
  );
}
