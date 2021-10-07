import { memo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { useApplicationSettings } from 'context/application';
import logo from 'assets/images/logo.svg';

const useStyles = makeStyles(({ transitions }) => ({
  sideBarLogo: {
    height: ({ topBarHeight }) => topBarHeight,
  },
  sideBar: {
    width: ({ sideBarWidth }) => sideBarWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  sideBarOpen: {
    width: ({ sideBarWidth }) => sideBarWidth,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  sideBarClose: {
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: ({ shiftedSideBarWidth }) => shiftedSideBarWidth,
  },
}));

export const SideBar = memo(({ items }) => {
  const { settings, setSettingsProperty } = useApplicationSettings();
  const classes = useStyles(settings);
  const location = useLocation();

  useEffect(() => {
    setSettingsProperty('hasSideBar', true);

    return () => setSettingsProperty('hasSideBar', false);
  }, []);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.sideBar, {
        [classes.sideBarOpen]: settings.sideBarOpened,
        [classes.sideBarClose]: !settings.sideBarOpened,
      })}
      classes={{
        paper: clsx({
          [classes.sideBarOpen]: settings.sideBarOpened,
          [classes.sideBarClose]: !settings.sideBarOpened,
        }),
      }}
    >
      <Box display="flex" className={classes.sideBarLogo}>
        <img src={logo} alt="logo" />
      </Box>
      <Divider />
      <List>
        {items.map(({ text, icon, to }) => (
          <ListItem
            button
            key={text}
            selected={location.pathname === to}
            component={Link}
            to={to}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
});

SideBar.defaultProps = {
  items: [],
};
