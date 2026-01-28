import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WizardData, StepNumber, PersonalInfo, WorkspaceDetails, Preferences } from '@/app/types/wizard';

interface WizardState {
  currentStep: StepNumber;
  formData: WizardData;
  isSubmitting: boolean;
  isComplete: boolean;
  stepValidation: {
    [key in StepNumber]?: boolean;
  };
}

interface WizardActions {
  goToStep: (step: StepNumber) => void;
  nextStep: () => void;
  previousStep: () => void;
  updatePersonalInfo: (data: PersonalInfo) => void;
  updateWorkspaceDetails: (data: WorkspaceDetails) => void;
  updatePreferences: (data: Preferences) => void;
  setStepValidation: (step: StepNumber, isValid: boolean) => void;
  resetWizard: () => void;
  submitWizard: () => Promise<void>;
}

type WizardStore = WizardState & WizardActions;

const initialState: WizardState = {
  currentStep: 1,
  formData: {},
  isSubmitting: false,
  isComplete: false,
  stepValidation: {},
};

export const useWizardStore = create<WizardStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      goToStep: (step: StepNumber) => {
        set({ currentStep: step });
      },

      nextStep: () => {
        const { currentStep } = get();
        if (currentStep < 5) {
          set({ currentStep: (currentStep + 1) as StepNumber });
        }
      },

      previousStep: () => {
        const { currentStep } = get();
        if (currentStep > 1) {
          set({ currentStep: (currentStep - 1) as StepNumber });
        }
      },

      updatePersonalInfo: (data: PersonalInfo) => {
        set((state) => ({
          formData: {
            ...state.formData,
            personalInfo: data,
          },
        }));
      },

      updateWorkspaceDetails: (data: WorkspaceDetails) => {
        set((state) => ({
          formData: {
            ...state.formData,
            workspaceDetails: data,
          },
        }));
      },

      updatePreferences: (data: Preferences) => {
        set((state) => ({
          formData: {
            ...state.formData,
            preferences: data,
          },
        }));
      },

      setStepValidation: (step: StepNumber, isValid: boolean) => {
        set((state) => ({
          stepValidation: {
            ...state.stepValidation,
            [step]: isValid,
          },
        }));
      },

      resetWizard: () => {
        set(initialState);
      },

      submitWizard: async () => {
        set({ isSubmitting: true });
        
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        set({ isSubmitting: false, isComplete: true, currentStep: 5 });
      },
    }),
    {
      name: 'wizard-storage',
      partialize: (state) => ({
        currentStep: state.currentStep,
        formData: state.formData,
      }),
    }
  )
);

// Selectors for optimized re-renders
export const useCurrentStep = () => useWizardStore((state) => state.currentStep);
export const useFormData = () => useWizardStore((state) => state.formData);
export const useIsSubmitting = () => useWizardStore((state) => state.isSubmitting);
export const useIsComplete = () => useWizardStore((state) => state.isComplete);
export const useStepValidation = (step: StepNumber) => 
  useWizardStore((state) => state.stepValidation[step] ?? false);
export const useCurrentStepValidation = () => {
  const currentStep = useCurrentStep();
  return useStepValidation(currentStep);
};
