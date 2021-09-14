import React, { useState } from 'react';
import Route from '@/routes';

import './index.scss';
import Navbar from './navbar';

const Layout = (): JSX.Element => {
  const [routeLayoutList, setRouteLayoutList] = useState([]);

  return (
    <div className="layout">
      <Navbar />
      <Route />
    </div>
  );
};

export default Layout;
