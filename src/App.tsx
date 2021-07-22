import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './constants/theme';
import { useTheme } from './hooks/useTheme';
import { AppLayout } from './layouts/App';
import GlobalStyle from './lib/globalStyles';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const styledComponentsTheme = React.useMemo(
    () => ({ ...themeMode, isDark: theme === 'dark', toggleTheme }),
    [theme, themeMode, toggleTheme],
  );
  return (
    <ThemeProvider theme={styledComponentsTheme}>
      <GlobalStyle />
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
