import { StepLabel as MuiStepLabel, StepLabelProps } from '@mui/material';

interface CustomStepLabelProps extends Omit<StepLabelProps, 'active' | 'completed'> {
  label: string;
  isActive?: boolean;
  isCompleted?: boolean;
}

export default function StepLabel({ label, isActive, isCompleted, ...props }: CustomStepLabelProps) {
  return (
    <MuiStepLabel
      {...props}
      sx={{
        '& .MuiStepLabel-label': {
          fontSize: { xs: '0.75rem', sm: '0.875rem' },
          fontWeight: isActive ? 600 : 400,
        },
      }}
    >
      {label}
    </MuiStepLabel>
  );
}
