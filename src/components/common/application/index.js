import { useCallback, useMemo, useState, memo } from 'react';

import { ApplicationContent } from 'components/common/application-content';
import {
  ApplicationProvider,
  defaultApplicationSettings,
} from 'context/application';

export const Application = memo(({ children }) => {
  const [settings, setSettings] = useState(defaultApplicationSettings);

  const setSettingsProperty = useCallback((propertyName, valueOrFunc) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [propertyName]:
        typeof valueOrFunc === 'function'
          ? valueOrFunc(prevSettings[propertyName])
          : valueOrFunc,
    }));
  }, []);

  const contextValue = useMemo(
    () => ({ settings, setSettings, setSettingsProperty }),
    [settings, setSettings, setSettingsProperty]
  );

  return (
    <ApplicationProvider value={contextValue}>
      <ApplicationContent>{children}</ApplicationContent>
    </ApplicationProvider>
  );
});
