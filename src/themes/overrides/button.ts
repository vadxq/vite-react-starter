// ** MUI Imports
import { Components, Theme } from '@mui/material/styles';

import { AppSettingState } from '@/store/appSetting/reducer';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    subtle: true;
    text: true;
    icon: true;
    iconTrigger: true;
    danger: true;
  }
}

const Button = (theme: Theme, _?: AppSettingState): Components<Theme> => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            color: theme.palette.multiple.G0,
            backgroundColor:
              theme.palette.mode === 'light'
                ? theme.palette.multiple.G1
                : theme.palette.multiple.G1A16,
            borderRadius: theme.shape.borderRadius,
            '&.Mui-disabled': {
              color:
                theme.palette.mode === 'light'
                  ? theme.palette.multiple.G0
                  : theme.palette.multiple.G1A40,
              backgroundColor:
                theme.palette.mode === 'light'
                  ? theme.palette.multiple.G1A24
                  : theme.palette.multiple.G1A12
            },
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'light'
                  ? theme.palette.multiple.G1A60
                  : theme.palette.multiple.G1A24
            },
            '&:active': {
              backgroundColor: theme.palette.multiple.G1A40
            }
          }
        }
      ]
    }
  } as unknown as Components<Theme>;
};

export default Button;
