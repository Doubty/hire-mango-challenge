import { Box, LinearProgress, Typography } from '@mui/material';

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({ password }: PasswordStrengthProps) {
  if (!password) return null;

  const getStrength = (pwd: string): { value: number; label: string; color: 'error' | 'warning' | 'success' } => {
    let strength = 0;
    
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z\d]/.test(pwd)) strength++;

    if (strength <= 2) {
      return { value: 33, label: 'Weak', color: 'error' };
    } else if (strength <= 3) {
      return { value: 66, label: 'Medium', color: 'warning' };
    } else {
      return { value: 100, label: 'Strong', color: 'success' };
    }
  };

  const strength = getStrength(password);

  return (
    <Box sx={{ mt: 1 }}>
      <LinearProgress
        variant="determinate"
        value={strength.value}
        color={strength.color}
        sx={{ height: 6, borderRadius: 3 }}
      />
      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
        Password strength: <strong>{strength.label}</strong>
      </Typography>
    </Box>
  );
}
