import { Box, Typography, Paper } from '@mui/material';
import { Link as LinkIcon } from '@mui/icons-material';

interface WorkspacePreviewProps {
  slug: string;
}

export default function WorkspacePreview({ slug }: WorkspacePreviewProps) {
  if (!slug) return null;

  const url = `${slug}.workspace.app`;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        mt: 2,
        backgroundColor: 'action.hover',
        borderColor: 'primary.main',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LinkIcon color="primary" sx={{ fontSize: 20 }} />
        <Typography variant="body2" color="text.secondary">
          Your workspace URL:
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          mt: 1,
          fontFamily: 'monospace',
          color: 'primary.main',
          fontWeight: 600,
        }}
      >
        {url}
      </Typography>
    </Paper>
  );
}
