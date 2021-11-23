import { useMemo } from 'react';
import { Home as HomeIcon } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

import { Application } from 'components/common/application';
import { SideBar } from 'components/common/side-bar';
import { TopBar } from 'components/common/top-bar';
import { Routes } from 'components/routes';
import { Home } from 'components/home';
import { Memes } from 'components/memes';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/memes', element: <Memes /> },
];

export const App = () => {
  const menuItems = useMemo(
    () => [{ text: 'Memes', to: '/memes', icon: <HomeIcon /> }],
    []
  );

  return (
    <Application>
      <SideBar items={menuItems} />
      <TopBar>
        <Typography variant="h6" noWrap>
          E2E application
        </Typography>
      </TopBar>
      <Routes routes={routes} fallbackRoute="/" />
    </Application>
  );
};
