import { createContext, useContext } from 'react';

export const defaultApplicationSettings = {
  sideBarWidth: 240,
  shiftedSideBarWidth: 56,
  topBarHeight: 64,
  hasTopBar: false,
  hasSideBar: false,
  sideBarOpened: false,
};

export const ApplicationContext = createContext({
  settings: defaultApplicationSettings,
  setSettings: () => {},
  setSettingsProperty: () => {},
});

const { Provider, Consumer } = ApplicationContext;

export { Provider as ApplicationProvider, Consumer as ApplicationConsumer };

export const useApplicationSettings = () => useContext(ApplicationContext);
