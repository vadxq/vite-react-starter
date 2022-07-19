import { useRoutes } from 'react-router-dom';
import config from '@/configs/route';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes], config.basename);
}
