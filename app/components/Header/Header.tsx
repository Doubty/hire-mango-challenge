import { AppBar, Toolbar, Container } from '@mui/material';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, sm: 64 },
            justifyContent: 'space-between',
          }}
        >
          <HeaderLogo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
