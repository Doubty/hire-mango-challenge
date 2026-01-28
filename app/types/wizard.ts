import { z } from 'zod';

// Step 1: Personal Information
export const personalInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;

// Step 2: Workspace Details
export const workspaceDetailsSchema = z.object({
  workspaceName: z.string().min(3, 'Workspace name must be at least 3 characters'),
  workspaceSlug: z.string().min(3, 'Workspace slug must be at least 3 characters'),
  description: z.string().optional(),
  type: z.enum(['Personal', 'Team', 'Enterprise']),
});

export type WorkspaceDetails = z.infer<typeof workspaceDetailsSchema>;

// Step 3: Preferences
export const preferencesSchema = z.object({
  theme: z.enum(['Light', 'Dark', 'System']),
  language: z.enum(['English', 'Español', 'Português']),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
    sms: z.boolean(),
  }),
  timezone: z.string(),
});

export type Preferences = z.infer<typeof preferencesSchema>;

// Complete Wizard Data
export interface WizardData {
  personalInfo?: PersonalInfo;
  workspaceDetails?: WorkspaceDetails;
  preferences?: Preferences;
}

// Step numbers
export const TOTAL_STEPS = 5;
export type StepNumber = 1 | 2 | 3 | 4 | 5;

// Step labels
export const STEP_LABELS = {
  1: 'Personal Info',
  2: 'Workspace',
  3: 'Preferences',
  4: 'Review',
  5: 'Success',
} as const;
