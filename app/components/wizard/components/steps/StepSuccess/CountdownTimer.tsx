'use client';

import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

interface CountdownTimerProps {
  initialCount?: number;
  onComplete: () => void;
}

export default function CountdownTimer({ initialCount = 5, onComplete }: CountdownTimerProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count <= 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Typography variant="body2" color="text.secondary">
        Redirecting in {count} second{count !== 1 ? 's' : ''}...
      </Typography>
    </Box>
  );
}
