type ThemeColorScale = Record<string | number, string>;

type ChartThemeColors = {
  secondary: ThemeColorScale;
  red: ThemeColorScale;
  gray: ThemeColorScale;
  Mdblue: ThemeColorScale;
};

/** ECharts palette — values from tailwind.config.js theme.extend.colors */
export const themeColors: ChartThemeColors = {
  secondary: {
    50: '#E2F3E0',
    300: '#8AD082',
    400: '#5BB966',
    600: '#008B31',
    800: '#016323',
    900: '#014E1C',
  },
  red: {
    600: '#C20205',
  },
  gray: {
    300: '#C5C5C5',
  },
  Mdblue: {
    700: '#001A31',
  },
};
