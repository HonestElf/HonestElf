import React from 'react';

export const themes = {
  dark: 'dark',
  light: 'light',
};

const defaultValue = {
  theme: themes.dark,
  setTheme: (theme: string) => {},
};

export const ThemeContext = React.createContext(defaultValue);
