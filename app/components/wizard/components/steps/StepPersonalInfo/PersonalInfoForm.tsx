'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Box, Stack } from '@mui/material';
import { personalInfoSchema, type PersonalInfo } from '@/app/types/wizard';
import PasswordStrength from './PasswordStrength';

interface PersonalInfoFormProps {
  defaultValues?: Partial<PersonalInfo>;
  onSubmit: (data: PersonalInfo) => void;
  onValidationChange?: (isValid: boolean) => void;
}

export default function PersonalInfoForm({ defaultValues, onSubmit, onValidationChange }: PersonalInfoFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues,
    mode: 'onChange',
  });

  const password = watch('password');
  const formValues = watch();
  const lastValidState = useRef<boolean>(false);
  const lastSubmittedData = useRef<string>('');

  useEffect(() => {
    if (onValidationChange && lastValidState.current !== isValid) {
      lastValidState.current = isValid;
      onValidationChange(isValid);
    }
  }, [isValid, onValidationChange]);

  useEffect(() => {
    if (isValid && formValues.fullName && formValues.email && formValues.password && formValues.confirmPassword) {
      const dataString = JSON.stringify(formValues);
      if (lastSubmittedData.current !== dataString) {
        lastSubmittedData.current = dataString;
        onSubmit(formValues as PersonalInfo);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid, formValues.fullName, formValues.email, formValues.password, formValues.confirmPassword]);

  const onSubmitForm = (data: PersonalInfo) => {
    onSubmit(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitForm)}>
      <Stack spacing={3}>
        <TextField
          {...register('fullName')}
          label="Full Name"
          fullWidth
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          required
        />
        <TextField
          {...register('email')}
          label="Email"
          type="email"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          required
        />
        <TextField
          {...register('password')}
          label="Password"
          type="password"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          required
        />
        {password && <PasswordStrength password={password} />}
        <TextField
          {...register('confirmPassword')}
          label="Confirm Password"
          type="password"
          fullWidth
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          required
        />
      </Stack>
    </Box>
  );
}
