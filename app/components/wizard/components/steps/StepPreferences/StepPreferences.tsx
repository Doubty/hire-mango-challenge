'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Typography, Paper, Stack, TextField } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { useWizardStore, useFormData } from '@/app/store/wizardStore';
import { preferencesSchema, type Preferences } from '@/app/types/wizard';
import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';
import NotificationSettings from './NotificationSettings';

// Common timezones
const timezones = [
  'UTC',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Australia/Sydney',
];

export default function StepPreferences() {
  const { updatePreferences, setStepValidation } = useWizardStore();
  const formData = useFormData();
  const lastSubmittedData = useRef<string>('');

  const {
    watch,
    setValue,
    formState: { isValid },
  } = useForm<Preferences>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: formData.preferences || {
      theme: 'System',
      language: 'English',
      notifications: {
        email: true,
        push: false,
        sms: false,
      },
      timezone: 'UTC',
    },
    mode: 'onChange',
  });

  const theme = watch('theme');
  const language = watch('language');
  const notifications = watch('notifications');
  const timezone = watch('timezone');

  useEffect(() => {
    setStepValidation(3, isValid);
    if (isValid && theme && language && notifications && timezone) {
      const dataString = JSON.stringify({ theme, language, notifications, timezone });
      if (lastSubmittedData.current !== dataString) {
        lastSubmittedData.current = dataString;
        updatePreferences({
          theme,
          language,
          notifications,
          timezone,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, language, notifications, timezone, isValid]);

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Settings color="primary" sx={{ fontSize: 32 }} />
        <Typography variant="h5" component="h2" fontWeight={600}>
          Preferences
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Customize your workspace preferences and notification settings.
      </Typography>
      <Stack spacing={4}>
        <ThemeSelector
          value={theme}
          onChange={(value) => setValue('theme', value, { shouldValidate: true })}
        />
        <LanguageSelector
          value={language}
          onChange={(value) => setValue('language', value, { shouldValidate: true })}
        />
        <TextField
          select
          label="Timezone"
          value={timezone}
          onChange={(e) => setValue('timezone', e.target.value, { shouldValidate: true })}
          fullWidth
          required
          SelectProps={{
            native: true,
          }}
        >
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </TextField>
        <NotificationSettings
          notifications={notifications}
          onChange={(newNotifications) =>
            setValue('notifications', newNotifications, { shouldValidate: true })
          }
        />
      </Stack>
    </Paper>
  );
}
