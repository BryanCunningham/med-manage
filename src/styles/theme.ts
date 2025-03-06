import { MedMangeTheme } from './theme.types';
import { Theme as EmotionTheme } from '@emotion/react';
import { playfairDisplay, sourceSans3 } from '../fonts';


// Augment the Emotion theme
declare module '@emotion/react' {
  export interface Theme extends EmotionTheme, MedMangeTheme
}

export const lightTheme = {
  colors: {
    // Primary variations
    primary: {
      100: '#DDE7FD',
      200: '#BCCEFC',
      300: '#99B1F6',
      400: '#7D98ED',
      500: '#5473E2',
      600: '#3D57C2',
      700: '#2A3FA2',
      800: '#1A2A83',
      900: '#101B6C',
    },
    // Accent variations
    accent: {
      main: '#FFB703',
      light: '#FFC22E',
      lighter: '#FFCD59',
      dark: '#CC9202',
      darker: '#996E02'
    },
    // Background variations
    background: {
      main: '#e9eafc',
      paper: '#FFFFFF',
      subtle: '#BCCEFC',
      muted: '#E2E8F0',
      dark: '#E5E7EB'
    },
    // Text variations
    text: {
      primary: '#000E22',
      secondary: '#696f7c',
      muted: '#1b2537',
      light: '#e9ecef',
      inverse: '#f8f9fa'
    },
    // Semantic colors
    status: {
      success: {
        100: '#DEFCD7',
        200: '#B7F9B0',
        300: '#86ED85',
        400: '#63DB6D',
        500: '#35C44F',
        600: '#26A84A',
        700: '#1A8D45',
        800: '#10713D',
        900: '#0A5E39',
      },
      warning: {
        100: '#FFF9CD',
        200: '#FFF19B',
        300: '#FFE769',
        400: '#FFDD43',
        500: '#FFCD05',
        600: '#DBAB03',
        700: '#B78B02',
        800: '#936D01',
        900: '#7A5800',
      },
      error: {
        100: '#FFE5D8',
        200: '#FFC6B2',
        300: '#FF9F8B',
        400: '#FF7B6F',
        500: '#FF3F3F',
        600: '#DB2E3D',
        700: '#B71F3A',
        800: '#931435',
        900: '#7A0C32',
      },
      info: {
        100: '#E3F4FE',
        200: '#C8E7FE',
        300: '#ADD7FE',
        400: '#98C8FD',
        500: '#76B0FC',
        600: '#5689D8',
        700: '#3B65B5',
        800: '#254692',
        900: '#162F78',
      }
    },
    // Border colors
    border: {
      light: '#E5E7EB',
      main: '#D1D5DB',
      dark: '#9CA3AF'
    },
    // Shadow colors with opacity
    shadow: {
      light: 'rgba(31, 41, 55, 0.05)',
      main: 'rgba(31, 41, 55, 0.1)',
      dark: 'rgba(31, 41, 55, 0.2)',
    }
  },
  // Spacing system
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '4rem'
  },
  // Breakpoints
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },
  // Typography
  typography: {
    fontFamily: {
      heading: playfairDisplay.style.fontFamily,
      body: sourceSans3.style.fontFamily,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '3.5rem'
    },
    fontWeight: {
      body: {
        normal: '400',
        bold: '600'
      },
      heading: {
        normal: '600',
        bold: '800'
      }
    }
  },
  // Border radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px'
  },
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out'
  },
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 12px 28px 0 rgba(0, 0, 0, 0.1), 0 8px 12px 0px rgba(0, 0, 0, 0.05)',
    lg: '0 18px 56px 0 rgba(0, 0, 0, 0.1), 0 10px 18px 0px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
};

export const darkTheme = {
    ...lightTheme,
  colors: {
    primary: {
      100: '#1A1A1A', // Darker variant
      200: '#333333',
      300: '#4D4D4D',
      400: '#666666',
      500: '#FFFFFF', // Lightest variant for contrast
      600: '#E0E0E0',
      700: '#B3B3B3',
      800: '#808080',
      900: '#4D4D4D',
    },
    secondary: {
      main: '#FFB703',
      light: '#FFC22E',
      lighter: '#FFCD59',
      dark: '#CC9202',
      darker: '#996E02',
    },
    accent: {
      main: '#FFB703',
      light: '#FFC22E',
      lighter: '#FFCD59',
      dark: '#CC9202',
      darker: '#996E02',
    },
    background: {
      main: '#000E22', // Darker background
      paper: '#011B33', // Dark paper color
      subtle: '#2A2A2A',
      muted: '#333333',
      dark: '#000000',
    },
    text: {
      primary: '#FFFFFF', // Light text for contrast
      secondary: '#B3B3B3',
      muted: '#E0E0E0',
      light: '#FFFFFF',
      inverse: '#000E22',
    },
    status: {
      success: {
        100: '#1E3A1E',
        200: '#2A6A2A',
        300: '#3B8E3B',
        400: '#5EB841',
        500: '#78D278',
        600: '#A3D3A3',
        700: '#C0E0C0',
        800: '#D7E7D7',
        900: '#E8F2E8',
      },
      warning: {
        100: '#3A3A1E',
        200: '#6A6A2A',
        300: '#8E8E3B',
        400: '#B8B841',
        500: '#D2D278',
        600: '#D3A3A3',
        700: '#E0C0C0',
        800: '#E7D7D7',
        900: '#F2E8E8',
      },
      error: {
        100: '#3A1E1E',
        200: '#6A2A2A',
        300: '#8E3B3B',
        400: '#B84141',
        500: '#D27878',
        600: '#A3A3A3',
        700: '#C0C0C0',
        800: '#D7D7D7',
        900: '#E8E8E8',
      },
      info: {
        100: '#1E3A3A',
        200: '#2A6A6A',
        300: '#3B8E8E',
        400: '#5EB8B8',
        500: '#78D2D2',
        600: '#A3D3D3',
        700: '#C0E0E0',
        800: '#D7E7E7',
        900: '#E8F2F2',
      },
    },
    border: {
      light: '#4D4D4D',
      main: '#666666',
      dark: '#808080',
    },
    shadow: {
      light: 'rgba(255, 255, 255, 0.1)',
      main: 'rgba(255, 255, 255, 0.2)',
      dark: 'rgba(255, 255, 255, 0.3)',
    },
  },
  shadows: {
    sm: 'none',
    md: 'none',
    lg: 'none',
    xl: 'none',
    '2xl': 'none',
  },
};

export const highContrastTheme = {
  ...lightTheme,
  colors: {
    primary: {
      100: '#FFFFFF', // White
      200: '#E0E0E0', // Light Gray
      300: '#B0B0B0', // Medium Light Gray
      400: '#808080', // Gray
      500: '#000000', // Black
      600: '#000000', // Black
      700: '#000000', // Black
      800: '#000000', // Black
      900: '#000000', // Black
    },
    secondary: {
      main: '#FFD700', // Bright Gold
      light: '#FFF700', // Bright Yellow
      lighter: '#FFFF00', // Yellow
      dark: '#FFC700', // Darker Gold
      darker: '#FFA500', // Orange
    },
    accent: {
      main: '#FF4500', // Orange Red
      light: '#FF6347', // Tomato
      lighter: '#FF7F50', // Coral
      dark: '#CD5C5C', // Indian Red
      darker: '#8B0000', // Dark Red
    },
    background: {
      main: '#000000', // Black
      paper: '#1A1A1A', // Dark Gray
      subtle: '#333333', // Medium Dark Gray
      muted: '#4D4D4D', // Medium Gray
      dark: '#000000', // Black
    },
    text: {
      primary: '#FFFFFF', // White
      secondary: '#FFD700', // Bright Gold
      muted: '#B0B0B0', // Medium Light Gray
      light: '#FFFFFF', // White
      inverse: '#000000', // Black
    },
    status: {
      success: {
        100: '#00FF00', // Bright Green
        200: '#32CD32', // Lime Green
        300: '#228B22', // Forest Green
        400: '#006400', // Dark Green
        500: '#004d00', // Darker Green
        600: '#003300', // Very Dark Green
        700: '#001900', // Almost Black Green
        800: '#000000', // Black
        900: '#000000', // Black
      },
      warning: {
        100: '#FFFF00', // Bright Yellow
        200: '#FFD700', // Gold
        300: '#FFA500', // Orange
        400: '#FF4500', // Orange Red
        500: '#FF0000', // Red
        600: '#B22222', // Firebrick
        700: '#8B0000', // Dark Red
        800: '#000000', // Black
        900: '#000000', // Black
      },
      error: {
        100: '#FF0000', // Red
        200: '#FF4500', // Orange Red
        300: '#FF6347', // Tomato
        400: '#CD5C5C', // Indian Red
        500: '#8B0000', // Dark Red
        600: '#000000', // Black
        700: '#000000', // Black
        800: '#000000', // Black
        900: '#000000', // Black
      },
      info: {
        100: '#00FFFF', // Cyan
        200: '#00CED1', // Dark Turquoise
        300: '#4682B4', // Steel Blue
        400: '#1E90FF', // Dodger Blue
        500: '#0000FF', // Blue
        600: '#00008B', // Dark Blue
        700: '#000000', // Black
        800: '#000000', // Black
        900: '#000000', // Black
      },
    },
    border: {
      light: '#FFFFFF', // White
      main: '#FFD700', // Bright Gold
      dark: '#B0B0B0', // Medium Light Gray
    },
    shadow: {
      light: 'rgba(255, 255, 255, 0.1)',
      main: 'rgba(255, 255, 255, 0.2)',
      dark: 'rgba(255, 255, 255, 0.3)',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
  },
};

// Add global transitions for theme switching
export const globalStyles = `
  *, *::before, *::after {
    transition: background-color 0.3s ease, 
                color 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }
`;

export type ThemeType = 'light' | 'dark' | 'high-contrast';
export type LightThemeType = typeof lightTheme;
export type HighContrastThemeType = typeof highContrastTheme;
export type DarkThemeType = typeof darkTheme;
export type AppTheme = LightThemeType | DarkThemeType | HighContrastThemeType;