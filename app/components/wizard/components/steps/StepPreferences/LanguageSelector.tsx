import { TextField, MenuItem } from '@mui/material';

interface LanguageSelectorProps {
  value: 'English' | 'Español' | 'Português';
  onChange: (value: 'English' | 'Español' | 'Português') => void;
}

const languages = [
  { value: 'English', label: 'English' },
  { value: 'Español', label: 'Español' },
  { value: 'Português', label: 'Português' },
];

export default function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <TextField
      select
      label="Language"
      value={value}
      onChange={(e) => onChange(e.target.value as 'English' | 'Español' | 'Português')}
      fullWidth
      required
    >
      {languages.map((lang) => (
        <MenuItem key={lang.value} value={lang.value}>
          {lang.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
