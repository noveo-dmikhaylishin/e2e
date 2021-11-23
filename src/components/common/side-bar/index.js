import { memo, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

import { useSideBarStyles } from './styles';

export const SideBar = memo(({ items, width, shiftedWidth }) => {
  const { settings, setSettingsProperty } = useApplicationSettings();

  const classes = useSideBarStyles(settings);

  const location = useLocation();

  useLayoutEffect(() => {
    setSettingsProperty('sideBar', {
      display: true,
      opened: false,
      width,
      shiftedWidth,
    });

    return () =>
      setSettingsProperty('sideBar', {
        display: false,
        opened: false,
        width: 0,
        shiftedWidth: 0,
      });
  }, []);

  return (
    <Drawer
      variant="permanent"
      className={classes.root}
      classes={{
        paper: classes.root,
      }}
    >
      <Box component={Link} to="/" display="flex" className={classes.logo}>
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
  width: 240,
  shiftedWidth: 60,
};
