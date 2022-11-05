import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Layout from '@/components/layout';
import Loadable from '@/components/Loadable';
const Home = Loadable(lazy(() => import('@/pages/home')));
const NotFound = Loadable(lazy(() => import('@/pages/login')));

/**
 * 公开路由
 * org/:id
 * user/:address
 * sbt/:contract/:tokenid
 *
 * 私密路由
 * profile/setting
 *
 * manage/org/send
 * manage/org/history
 * manage/org/edit
 */

const MainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Navigate to="/home" />
    },
    {
      path: '/home',
      element: <Home />,
      meta: {
        auth: false
      }
    },
    {
      // 404
      path: '/*',
      element: <NotFound />,
      meta: {
        auth: false
      }
    }
  ]
};

export default MainRoutes;
