import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Box } from '@mui/material';
import { Email, Notifications, Sms } from '@mui/icons-material';

interface NotificationSettingsProps {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  onChange: (notifications: { email: boolean; push: boolean; sms: boolean }) => void;
}

export default function NotificationSettings({ notifications, onChange }: NotificationSettingsProps) {
  const handleChange = (key: keyof typeof notifications) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...notifications,
      [key]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend" sx={{ mb: 2 }}>
        Notification Preferences
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={notifications.email}
              onChange={handleChange('email')}
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email fontSize="small" />
              Email Notifications
            </Box>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={notifications.push}
              onChange={handleChange('push')}
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Notifications fontSize="small" />
              Push Notifications
            </Box>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={notifications.sms}
              onChange={handleChange('sms')}
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Sms fontSize="small" />
              SMS Notifications
            </Box>
          }
        />
      </FormGroup>
    </FormControl>
  );
}
