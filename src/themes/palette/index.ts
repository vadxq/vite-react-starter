// ** Type Imports
import { PaletteMode } from '@mui/material';

import { hexToRGBA } from '@/utils/hexToGgba';

const DefaultPalette = (mode: PaletteMode) => {
  // ** Vars
  const lightColor = '#fff';
  const darkColor = '#000';
  const mainColor = mode === 'light' ? lightColor : darkColor;
  // grey
  const G1 = mode === 'light' ? '#000' : '#fff';
  const G1A80 = hexToRGBA(G1, 0.8);
  const G1A60 = hexToRGBA(G1, 0.6);
  const G1A40 = hexToRGBA(G1, 0.4);
  const G1A24 = hexToRGBA(G1, 0.24);
  const G1A16 = hexToRGBA(G1, 0.16);
  const G1A12 = hexToRGBA(G1, 0.12);
  const G1A08 = hexToRGBA(G1, 0.08);
  const G1A04 = hexToRGBA(G1, 0.04);
  const G0 = mode === 'light' ? '#fff' : '#000';

  return {
    customColors: {
      main: mainColor
    },
    common: {
      black: '#000',
      white: '#FFF',
      overlay: 'rgba(0, 0, 0, 0.4)'
    },
    mode,
    text: {
      primary: G1,
      secondary: G1A60,
      disabled: G1A40
    },
    background: {
      paper: mode === 'light' ? '#FFF' : '#000',
      default: mode === 'light' ? '#fff' : '#000'
    },
    multiple: {
      black: '#000',
      white: '#FFF',
      overlay: 'rgba(0, 0, 0, 0.6)',
      borderColor: mode === 'light' ? G1A04 : G1A16,
      grey: G1A60,
      G1,
      G1A80,
      G1A60,
      G1A40,
      G1A24,
      G1A16,
      G1A12,
      G1A08,
      G1A04,
      G0
    }
  };
};

export default DefaultPalette;
