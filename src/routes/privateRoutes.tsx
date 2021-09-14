import Wedding from '../pages/wedding';

const privateRoutes = [
  {
    path: '/wedding',
    component: Wedding,
    exact: true,
    role: 'user',
    backUrl: '/login'
  }
];

export default privateRoutes;
