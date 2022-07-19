// ** React Imports
import { ReactNode } from 'react';

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles/';

// ** Theme Imports
import themeConfig from '@/configs/theme';
import { AppSettingState } from '@/store/appSetting/reducer';
import GlobalStyling from './globalStyles';
import overrides from './overrides';
import themeOptions from './themeOptions';
import typography from './typography';

// ** Theme

// ** Global Styles

interface Props {
  settings: AppSettingState;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props;

  // ** Merged ThemeOptions
  const coreThemeConfig = themeOptions(settings);

  // ** CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig);

  // ** merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...overrides(theme, settings) },
    typography: { ...typography(theme, settings) }
  });

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
