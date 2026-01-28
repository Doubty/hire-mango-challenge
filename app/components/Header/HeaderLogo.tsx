import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export default function HeaderLogo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          transition: 'opacity 0.2s',
          '&:hover': {
            opacity: 0.8,
          },
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          Workspace by Antônio Galvão 
        </Typography>
      </Box>
    </Link>
  );
}
