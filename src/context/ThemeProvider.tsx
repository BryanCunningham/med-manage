'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Global, css } from '@emotion/react';
import { lightTheme, darkTheme, AppTheme } from '../styles/theme';

// TODO: Add high-contrast theme
type ThemeContextType = {
  themeType: 'light' | 'dark';
  cycleTheme: () => void;
  theme: AppTheme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const globalStyles = (theme: AppTheme) => css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    height: 100%;
    background-color: ${theme.colors.background.main};
    color: ${theme.colors.text.primary};
    font-family: ${theme.typography.fontFamily.body};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    > div {
      height: 100%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.heading};
    font-weight: ${theme.typography.fontWeight.heading.normal};
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
    letter-spacing: 0.035em;
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  button {
    font-family: inherit;
  }

  ::selection {
    background-color: ${theme.colors.primary["500"]};
    color: ${theme.colors.text.inverse};
  }
`;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeType, setThemeType] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as typeof themeType;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'high-contrast')) {
      setThemeType(savedTheme);
    } 
    // TODO: add back preference check. Removed for testing purposes so that you can see light theme first and switch to dark manually
    // else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   console.log('dark theme?');
    //   setThemeType('dark');
    // }
  }, []);

  const cycleTheme = () => {
    const themes: typeof themeType[] = ['light', 'dark'];
    const nextIndex = (themes.indexOf(themeType) + 1) % themes.length;
    setThemeType(themes[nextIndex]);
    localStorage.setItem('theme', themes[nextIndex]);
  };

  const currentTheme = {
    light: lightTheme,
    dark: darkTheme,
  }[themeType];

  return (
    <ThemeContext.Provider value={{ themeType, cycleTheme, theme: currentTheme }}>
      <EmotionThemeProvider theme={currentTheme}>
        <Global styles={globalStyles(currentTheme)} />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 