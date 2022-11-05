import MainRoutes from './MainRoutes';
import RouterGurad from './gurad';

// const basename = '';

export default function ThemeRoutes() {
  // return useRoutes([MainRoutes, AuthenticationRoutes], basename);
  return RouterGurad([MainRoutes]);
}
