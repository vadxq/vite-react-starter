import { useAppSetting } from '@/store/appSetting';
import { Auth } from '@/store/appSetting/reducer';
import { useEffect, useRef, useState } from 'react';
import {
  Location,
  matchRoutes,
  NavigateFunction,
  useLocation,
  useNavigate,
  useRoutes
} from 'react-router-dom';

interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  meta?: {
    auth?: boolean;
  };
}

// 递归查询对应的路由
export function searchroutedetail(
  path: string,
  routes: RouteObject[],
  params: any
): RouteObject | null {
  for (const item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      return searchroutedetail(path, item.children, params);
    }
  }
  return null;
}

// 全局路由守卫
async function guard(
  location: Location,
  navigate: NavigateFunction,
  routes: RouteObject[],
  auth: Auth,
  setAuth: any,
  matchRoutes: any,
  setClick?: any
) {
  // 找到对应的路由信息
  // const routedetail = searchroutedetail(pathname, routes, params);
  try {
    const matchRoute: any = matchRoutes(routes, location);
    console.log(matchRoute);
    const routedetail = matchRoute[matchRoute?.length - 1].route;

    // 没有找到路由，跳转404
    if (!routedetail) {
      navigate('/home');
      return false;
    }

    // 如果需要权限验证
    if (routedetail?.meta?.auth) {
      return true;
    }
    return true;
  } catch (error) {
    navigate('/home');
    return false;
  }
}

export default (routes: RouteObject[]) => {
  const { auth, setAuth } = useAppSetting();
  const [isClick, setClick] = useState(true);
  const ref = useRef(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isClick && ref.current) {
      guard(location, navigate, routes, auth, setAuth, matchRoutes, setClick);
    } else {
      ref.current = true;
    }
  }, [location, navigate, routes]);
  document.documentElement.scrollTo(0, 0);
  const Route = useRoutes(routes);
  return Route;
};
