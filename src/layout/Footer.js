import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack
    sx={{
      p: 2,
      textAlign: 'right',
    }}
    >
      <Typography variant="h6" gutterBottom>
        © Olivia Wilcox 2024
      </Typography>
      <Typography variant="body2"  sx={{ textTransform: 'uppercase' }}>
        Software Engineer
      </Typography>
    </Stack>
  );
};

export default Footer;