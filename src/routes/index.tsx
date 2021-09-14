import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import publicRoutes from '@/routes/publicRoutes';
import privateRoutes from '@/routes/privateRoutes';
import AuthRoute from '@/components/authRoute';
import adminRoutes from '@/routes/adminRoutes';

const Layout = (): JSX.Element => {
  const [user, setUser] = useState<{ role: string[] }>({ role: [] });

  const loginAsUser = () => {
    setUser({
      role: ['user']
    });
  };

  const loginAsAdmin = () => {
    setUser({
      role: ['user', 'admin']
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map(({ path, component, ...route }) => (
          <Route
            key={path}
            path={path}
            {...route}
            render={(routeProps) => {
              const Component: any = component;
              return (
                <Component
                  loginAsUser={loginAsUser}
                  loginAsAdmin={loginAsAdmin}
                  {...routeProps}
                />
              );
            }}
          />
        ))}
        {privateRoutes.map((route) => (
          <AuthRoute key={route.path} {...route} user={user} />
        ))}
        {adminRoutes.map((route) => (
          <AuthRoute key={route.path} {...route} user={user} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;
