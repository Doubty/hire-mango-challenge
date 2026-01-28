import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { LightMode, DarkMode, SettingsBrightness } from '@mui/icons-material';

interface ThemeSelectorProps {
  value: 'Light' | 'Dark' | 'System';
  onChange: (value: 'Light' | 'Dark' | 'System') => void;
}

export default function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend" sx={{ mb: 2 }}>
        Theme Preference
      </FormLabel>
      <RadioGroup
        value={value}
        onChange={(e) => onChange(e.target.value as 'Light' | 'Dark' | 'System')}
        sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}
      >
        <FormControlLabel
          value="Light"
          control={<Radio />}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LightMode fontSize="small" />
              Light
            </Box>
          }
        />
        <FormControlLabel
          value="Dark"
          control={<Radio />}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DarkMode fontSize="small" />
              Dark
            </Box>
          }
        />
        <FormControlLabel
          value="System"
          control={<Radio />}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SettingsBrightness fontSize="small" />
              System
            </Box>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
