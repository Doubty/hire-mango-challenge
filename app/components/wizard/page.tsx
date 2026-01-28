'use client';

import { Container } from '@mui/material';
import { useCurrentStep } from '@/app/store/wizardStore';
import MainLayout from '@/app/components/Layout/MainLayout';
import WizardStepper from './components/WizardStepper/WizardStepper';
import WizardContainer from './components/WizardContainer/WizardContainer';
import WizardNavigation from './components/WizardNavigation/WizardNavigation';
import StepPersonalInfo from './components/steps/StepPersonalInfo/StepPersonalInfo';
import StepWorkspaceDetails from './components/steps/StepWorkspaceDetails/StepWorkspaceDetails';
import StepPreferences from './components/steps/StepPreferences/StepPreferences';
import StepReview from './components/steps/StepReview/StepReview';
import StepSuccess from './components/steps/StepSuccess/StepSuccess';

const steps = [
  <StepPersonalInfo key="1" />,
  <StepWorkspaceDetails key="2" />,
  <StepPreferences key="3" />,
  <StepReview key="4" />,
  <StepSuccess key="5" />,
];

export default function WizardPage() {
  const currentStep = useCurrentStep();

  const renderStep = () => {
    return steps[currentStep - 1];
  };

  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
        <WizardStepper />
        <WizardContainer>{renderStep()}</WizardContainer>
        {currentStep < 5 && <WizardNavigation />}
      </Container>
    </MainLayout>
  );
}
