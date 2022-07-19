// ** MUI Theme Provider
// import { ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';

// ** Theme Override Imports
import { AppSettingState } from '@/store/appSetting/reducer';
import breakpoints from './breakpoints';
import palette from './palette';
import Shape from './shape';
import { PaletteMode } from '@mui/material';

const themeOptions = (settings: AppSettingState): any => {
  const themeConfig = {
    palette: palette(settings.theme.mode as PaletteMode),
    typography: {
      fontFamily: [
        '"Space Grotesk"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        '"PingFang SC"',
        ' "Noto Sans"',
        '"Noto Sans CJK SC"',
        '"Microsoft YaHei"',
        'sans-serif'
      ].join(',')
    },
    breakpoints: breakpoints(),
    shape: Shape()
  };

  return deepmerge(themeConfig, {});
};

export default themeOptions;
