import { Box, LinearProgress } from '@material-ui/core';

import { useProgressStyles } from './styles';

export const FixedProgress = () => {
  const classes = useProgressStyles();

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={10000}>
      <LinearProgress color="secondary" width={1} className={classes.root} />
    </Box>
  );
};
