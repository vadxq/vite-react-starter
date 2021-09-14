import Login from '@/pages/login';
import Home from '@/pages/home';

const publicRoutes = [
  {
    path: '/login',
    component: Login,
    exact: true,
    screen: true
  },
  {
    path: '/',
    component: Home,
    exact: true
  }
];

export default publicRoutes;
