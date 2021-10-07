import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useCallback, useEffect } from 'react';

import { useApplicationSettings } from 'context/application';

const useStyles = makeStyles(({ transitions, zIndex }) => ({
  appBar: {
    zIndex: zIndex.drawer + 1,
    height: ({ topBarHeight }) => topBarHeight,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: ({ sideBarWidth }) => sideBarWidth,
    width: ({ sideBarWidth }) => `calc(100% - ${sideBarWidth}px)`,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  appBarDrawerMenuButton: {
    marginRight: 36,
  },
}));

export const TopBar = () => {
  const { settings, setSettings, setSettingsProperty } =
    useApplicationSettings();
  const classes = useStyles(settings);

  useEffect(() => {
    setSettingsProperty('hasTopBar', true);

    return () => setSettingsProperty('hasTopBar', false);
  }, []);

  const toggleSideBar = useCallback(() => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      sideBarOpened: !prevSettings.sideBarOpened,
    }));
  }, [setSettings]);

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: settings.sideBarOpened,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSideBar}
          edge="start"
          className={classes.appBarDrawerMenuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Awesome application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
