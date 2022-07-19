// ** Theme Type Import
// import { Theme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { AppSettingState } from '@/store/appSetting/reducer';

interface ExtendedTypographyOptions extends TypographyOptions {
  largeTitle: React.CSSProperties;
}

const Typography = (theme: any, settings: AppSettingState) => {
  return {
    largeTitle: {
      fontWeight: settings.i18n.lang === 'en-US' ? 700 : 600,
      fontSize: 56,
      lineHeight: 60 / 56, // 60
      color: theme.palette.grey.G1,
      textTransform: 'none'
    },
    body1: {
      fontWeight: 400,
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    body2: {
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.15px',
      color: theme.palette.text.secondary
    }
  } as unknown as ExtendedTypographyOptions;
};

export default Typography;
