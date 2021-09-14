import Admin from '@/pages/admin';

const adminRoutes = [
  {
    path: '/admin',
    component: Admin,
    exact: true,
    role: 'admin',
    backUrl: '/backend'
  }
];

export default adminRoutes;
