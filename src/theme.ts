declare module '@mui/material/styles' {
  interface Palette {
    recipe: Palette['primary'];
    recipe_secondary: Palette['primary'];
  }

  interface PaletteOptions {
    recipe?: PaletteOptions['primary'];
    recipe_secondary?: PaletteOptions['primary'];
  }
}

import { alpha, createTheme, getContrastRatio } from '@mui/material';

export type Color =
  | 'primary'
  | 'secondary'
  | 'recipe'
  | 'recipe_secondary'
  | 'success'
  | 'warning'
  | 'error';

const colors = {
  primary: '#EEE0CB',
  secondary: '#839788',
  recipe: '#C6CBC7',
  recipe_secondary: '#B9BCB9',
  success: '#62956F',
  warning: '#BAA898',
  error: '#A63D40',
};

const getColorTokens = (color: string) => ({
  main: color,
  light: alpha(color, 0.5),
  dark: alpha(color, 0.9),
  contrastText: getContrastRatio(color, '#fff') > 4.5 ? '#fff' : '#111',
});

const getPallet = (colors: Record<Color, string>) =>
  Object.entries(colors).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: getColorTokens(value),
    }),
    {},
  );

export default createTheme({
  palette: getPallet(colors),
  shape: {
    borderRadius: 24,
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 4,
      },
    },
  },
});
