import { Box, Typography } from '@material-ui/core';
import { memo } from 'react';

export const Home = memo(() => (
  <Box m={4}>
    <Typography variant="h4" component="h1" align="center" gutterBottom>
      Home
    </Typography>
  </Box>
));
