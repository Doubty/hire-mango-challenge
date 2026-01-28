'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Box, Stack, MenuItem } from '@mui/material';
import { workspaceDetailsSchema, type WorkspaceDetails } from '@/app/types/wizard';
import WorkspacePreview from './WorkspacePreview';

interface WorkspaceFormProps {
  defaultValues?: Partial<WorkspaceDetails>;
  onSubmit: (data: WorkspaceDetails) => void;
  onValidationChange?: (isValid: boolean) => void;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function WorkspaceForm({ defaultValues, onSubmit, onValidationChange }: WorkspaceFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<WorkspaceDetails>({
    resolver: zodResolver(workspaceDetailsSchema),
    defaultValues,
    mode: 'onChange',
  });

  const workspaceName = watch('workspaceName');
  const workspaceSlug = watch('workspaceSlug');
  const lastValidState = useRef<boolean>(false);
  const lastSubmittedData = useRef<string>('');

  // Auto-generate slug from workspace name
  useEffect(() => {
    if (workspaceName && !workspaceSlug) {
      const slug = generateSlug(workspaceName);
      setValue('workspaceSlug', slug, { shouldValidate: true });
    }
  }, [workspaceName, workspaceSlug, setValue]);

  const formValues = watch();

  useEffect(() => {
    if (onValidationChange && lastValidState.current !== isValid) {
      lastValidState.current = isValid;
      onValidationChange(isValid);
    }
  }, [isValid, onValidationChange]);

  useEffect(() => {
    if (isValid && formValues.workspaceName && formValues.workspaceSlug && formValues.type) {
      const dataString = JSON.stringify(formValues);
      if (lastSubmittedData.current !== dataString) {
        lastSubmittedData.current = dataString;
        onSubmit(formValues as WorkspaceDetails);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid, formValues.workspaceName, formValues.workspaceSlug, formValues.type]);

  const onSubmitForm = (data: WorkspaceDetails) => {
    onSubmit(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitForm)}>
      <Stack spacing={3}>
        <TextField
          {...register('workspaceName')}
          label="Workspace Name"
          fullWidth
          error={!!errors.workspaceName}
          helperText={errors.workspaceName?.message}
          required
        />
        <TextField
          {...register('workspaceSlug')}
          label="Workspace URL"
          fullWidth
          error={!!errors.workspaceSlug}
          helperText={errors.workspaceSlug?.message || 'This will be your unique workspace URL'}
          required
          InputProps={{
            endAdornment: <Box sx={{ color: 'text.secondary', mr: 1 }}>.workspace.app</Box>,
          }}
        />
        {workspaceSlug && <WorkspacePreview slug={workspaceSlug} />}
        <TextField
          {...register('description')}
          label="Description (Optional)"
          fullWidth
          multiline
          rows={3}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField
          {...register('type')}
          label="Workspace Type"
          select
          fullWidth
          error={!!errors.type}
          helperText={errors.type?.message}
          required
        >
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Team">Team</MenuItem>
          <MenuItem value="Enterprise">Enterprise</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
}
