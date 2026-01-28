import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface NavigationButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  fullWidth?: boolean;
}

export default function NavigationButton({
  variant = 'primary',
  loading = false,
  children,
  disabled,
  fullWidth = false,
  ...props
}: NavigationButtonProps) {
  return (
    <Button
      {...props}
      variant={variant === 'primary' ? 'contained' : 'outlined'}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      sx={{
        minWidth: { xs: '100%', sm: 120 },
        ...props.sx,
      }}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </Button>
  );
}
