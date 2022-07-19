// ** MUI Imports
import { Components, Theme } from '@mui/material/styles';

import { AppSettingState } from '@/store/appSetting/reducer';

// ** Overrides Imports
import MuiButton from './button';

const overrideComponents = [MuiButton];

const Overrides = (
  theme: Theme,
  settings: AppSettingState
): Components<Theme> => {
  return overrideComponents.reduce((overrideConfig, overideFunc) => {
    return Object.assign(overrideConfig, overideFunc(theme, settings));
  }, {} as Components<Theme>);
};

export default Overrides;
