/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import React from 'react';

declare global {
  interface Window {
    __theme: string;
    __onThemeChange: any;
    __setPreferredTheme: any;
  }
}

export const useTheme = () => {
  const [theme, setTheme] = React.useState('dark');
  const [isLoading, setIsLoading] = React.useState(true);
  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
    setIsLoading(false);
  };

  React.useEffect(() => {
    const userSelectedTheme = localStorage.getItem('theme');
    if (userSelectedTheme) {
      setTheme(userSelectedTheme);
    } else {
      setTheme(global.window.__theme);
    }
    global.window.__onThemeChange = setTheme;
    setIsLoading(false);
  }, []);

  return { theme, toggleTheme, isLoading };
};
