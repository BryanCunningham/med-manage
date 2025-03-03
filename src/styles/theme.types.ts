export interface Theme {
  colors: {
    primary: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      main: string;
      light: string;
      lighter: string;
      dark: string;
      darker: string;
    };
    accent: {
      main: string;
      light: string;
      lighter: string;
      dark: string;
      darker: string;
    };
    background: {
      main: string;
      paper: string;
      subtle: string;
      muted: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
      light: string;
      inverse: string;
    };
    status: {
      success: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      warning: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      error: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      info: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    border: {
      light: string;
      main: string;
      dark: string;
    };
    shadow: {
      light: string;
      main: string;
      dark: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  typography: {
    fontFamily: {
      heading: string;
      body: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      body: {
        normal: string;
        bold: string;
      };
      heading: {
        normal: string;
        bold: string;
      };
    };
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
} 