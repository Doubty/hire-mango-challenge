import { Box, Container, Typography, Link, Stack } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 3 }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'center' }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Workspace. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              Terms
            </Link>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              Privacy
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
