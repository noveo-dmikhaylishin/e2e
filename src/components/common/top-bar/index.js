import { memo, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import { useApplicationSettings } from 'context/application';

import { useTopBarStyles } from './styles';

export const TopBar = memo(({ height, children }) => {
  const { settings, setSettingsProperty } = useApplicationSettings();
  const classes = useTopBarStyles(settings);

  useEffect(() => {
    setSettingsProperty('topBar', {
      display: true,
      height,
    });

    return () =>
      setSettingsProperty('topBar', {
        display: false,
        height: 0,
      });
  }, []);

  const toggleSideBar = useCallback(() => {
    setSettingsProperty('sideBar', (sideBar) => ({
      ...sideBar,
      opened: !sideBar.opened,
    }));
  }, [setSettingsProperty]);

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.root, {
        [classes.shifted]: settings.sideBar.opened,
      })}
    >
      <Toolbar>
        <IconButton color="inherit" onClick={toggleSideBar} edge="start">
          <MenuIcon />
        </IconButton>
        {children}
      </Toolbar>
    </AppBar>
  );
});

TopBar.defaultProps = {
  height: 60,
};
