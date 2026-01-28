'use client';

import { Stepper, Step, StepButton, Box, useMediaQuery, useTheme } from '@mui/material';
import { Check, Person, Business, Settings, RateReview, CheckCircle } from '@mui/icons-material';
import { useCurrentStep } from '@/app/store/wizardStore';
import { STEP_LABELS, TOTAL_STEPS } from '@/app/types/wizard';
import StepLabel from './StepLabel';

const stepIcons = [
  <Person key="person" />,
  <Business key="business" />,
  <Settings key="settings" />,
  <RateReview key="review" />,
  <CheckCircle key="success" />,
];

export default function WizardStepper() {
  const currentStep = useCurrentStep();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Stepper
        activeStep={currentStep - 1}
        orientation={isMobile ? 'vertical' : 'horizontal'}
        sx={{
          '& .MuiStep-root': {
            padding: { xs: '8px', sm: '16px' },
          },
        }}
      >
        {Array.from({ length: TOTAL_STEPS }, (_, index) => {
          const stepNumber = (index + 1) as typeof currentStep;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <Step key={stepNumber} completed={isCompleted}>
              <StepButton
                disabled
                sx={{
                  '& .MuiStepButton-root': {
                    padding: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    flexDirection: { xs: 'row', md: 'column' },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isCompleted
                        ? 'primary.main'
                        : isActive
                        ? 'primary.main'
                        : 'action.disabledBackground',
                      color: isCompleted || isActive ? 'white' : 'action.disabled',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isCompleted ? (
                      <Check sx={{ fontSize: 24 }} />
                    ) : (
                      stepIcons[index]
                    )}
                  </Box>
                  <StepLabel
                    label={STEP_LABELS[stepNumber]}
                    isActive={isActive}
                    isCompleted={isCompleted}
                  />
                </Box>
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
