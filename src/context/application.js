import { createContext, useContext } from 'react';

export const defaultApplicationSettings = {
  sideBar: {
    display: false,
    opened: false,
    width: 0,
    shiftedWidth: 0,
  },
  topBar: {
    display: false,
    height: 0,
  },
};

export const ApplicationContext = createContext({
  settings: defaultApplicationSettings,
  setSettings: () => {},
  setSettingsProperty: () => {},
});

const { Provider, Consumer } = ApplicationContext;

export { Provider as ApplicationProvider, Consumer as ApplicationConsumer };

export const useApplicationSettings = () => useContext(ApplicationContext);
