import { memo } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useApplicationSettings } from 'context/application';

const useStyles = makeStyles(({ transitions }) => ({
  root: {
    paddingTop: ({ hasTopBar, topBarHeight }) => (hasTopBar ? topBarHeight : 0),
    paddingLeft: ({
      hasSideBar,
      shiftedSideBarWidth,
      sideBarWidth,
      sideBarOpened,
    }) => {
      if (!hasSideBar) {
        return 0;
      }

      return sideBarOpened ? sideBarWidth : shiftedSideBarWidth;
    },
    transition: transitions.create(['padding-left'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
}));

export const ApplicationContent = memo(({ children }) => {
  const { settings } = useApplicationSettings();
  const classes = useStyles(settings);

  return <Box className={classes.root}>{children}</Box>;
});
