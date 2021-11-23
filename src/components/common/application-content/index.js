import { memo, useMemo } from 'react';
import { Box } from '@material-ui/core';

import { useApplicationSettings } from 'context/application';

import { useApplicationContentStyles } from './styles';

export const ApplicationContent = memo(({ children }) => {
  const { settings } = useApplicationSettings();
  const contentPaddings = useMemo(() => {
    const { sideBar, topBar } = settings;
    const paddings = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };

    if (sideBar.display) {
      paddings.left = sideBar.opened ? sideBar.width : sideBar.shiftedWidth;
    }

    if (topBar.display) {
      paddings.top = topBar.height;
    }

    return paddings;
  }, [settings]);
  const classes = useApplicationContentStyles(contentPaddings);

  return <Box className={classes.root}>{children}</Box>;
});
