declare module '@mui/material/styles/createPalette' {
  type CSSProperty = string;

  interface Palette {
    multiple: {
      G1: CSSProperty;
      G1A80: CSSProperty;
      G1A60: CSSProperty;
      G1A40: CSSProperty;
      G1A24: CSSProperty;
      G1A16: CSSProperty;
      G1A12: CSSProperty;
      G1A08: CSSProperty;
      G1A04: CSSProperty;
      G0: CSSProperty;
    };
  }
  interface PaletteOptions {
    multiple: {
      G1: CSSProperty;
      G1A80: CSSProperty;
      G1A60: CSSProperty;
      G1A40: CSSProperty;
      G1A24: CSSProperty;
      G1A16: CSSProperty;
      G1A12: CSSProperty;
      G1A08: CSSProperty;
      G1A04: CSSProperty;
      G0: CSSProperty;
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    largeTitle: true;
  }
}

export {};
