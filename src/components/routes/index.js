import { useMemo } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

export const Routes = ({ routes = [], fallbackRoute, isAuthorized }) => {
  const acceptedRoutes = useMemo(() => {
    const availableRoutes = routes.filter(({ requiresLogin }) =>
      requiresLogin ? isAuthorized : true
    );

    availableRoutes.push({
      path: '*',
      element: <Navigate to={fallbackRoute} />,
    });

    return availableRoutes;
  }, [isAuthorized, fallbackRoute]);

  return useRoutes(acceptedRoutes);
};
