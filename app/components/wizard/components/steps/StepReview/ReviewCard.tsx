import { Card, CardContent, CardHeader, Box } from '@mui/material';

interface ReviewCardProps {
  title: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

export default function ReviewCard({ title, children, actionButton }: ReviewCardProps) {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader
        title={title}
        action={actionButton}
        sx={{
          pb: 1,
          '& .MuiCardHeader-title': {
            fontSize: '1.1rem',
            fontWeight: 600,
          },
        }}
      />
      <CardContent sx={{ pt: 0 }}>
        {children}
      </CardContent>
    </Card>
  );
}
