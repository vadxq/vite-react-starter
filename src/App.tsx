import Routes from '@/routes';
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import ThemeComponent from '@/themes';
import { AppSettingProvider } from '@/store/appSetting/context';
import { useAppSetting } from './store/appSetting';

const App = (): JSX.Element => {
  const { appSetting } = useAppSetting();
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <AppSettingProvider>
          <ThemeComponent settings={appSetting}>
            <Routes />
          </ThemeComponent>
        </AppSettingProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};

export default App;
