import { useMemo } from 'react';
import { Home as HomeIcon, Photo as PhotoIcon } from '@material-ui/icons';

import { Application } from 'components/common/application';
import { SideBar } from 'components/common/side-bar';
import { TopBar } from 'components/common/top-bar';
import { Routes } from 'components/routes';
import { Home } from 'components/home';
import { Photos } from 'components/photos';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/photos', element: <Photos /> },
];

export const App = () => {
  const menuItems = useMemo(
    () => [
      { text: 'Dashboard', to: '/', icon: <HomeIcon /> },
      { text: 'Photos', to: '/photos', icon: <PhotoIcon /> },
    ],
    []
  );

  return (
    <Application>
      <SideBar items={menuItems} />
      <TopBar />
      <Routes routes={routes} fallbackRoute="/" />
    </Application>
  );
};
