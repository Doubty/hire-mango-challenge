import { Box, Typography, Stack } from '@mui/material';

interface ReviewSectionProps {
  title?: string;
  data: Record<string, string | boolean | undefined>;
  onEdit?: () => void;
}

export default function ReviewSection({ title, data, onEdit }: ReviewSectionProps) {
  const formatValue = (value: string | boolean | undefined): string => {
    if (value === undefined || value === null) return 'Not provided';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value);
  };

  return (
    <Box>
      {title && (
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          {title}
        </Typography>
      )}
      <Stack spacing={1}>
        {Object.entries(data).map(([key, value]) => (
          <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
            <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              {formatValue(value)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
