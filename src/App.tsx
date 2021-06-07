import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FlatButton, SolidButton } from './components/Button';
import { darkTheme, lightTheme } from './constants/theme';
import { useTheme } from './hooks/useTheme';
import GlobalStyle from './lib/globalStyles';

const StyledApp = styled.div`
  display: flex;
`;

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
      <StyledApp>
        <FlatButton>alkfds</FlatButton>
        <SolidButton>alkfds</SolidButton>
      </StyledApp>
      ;
    </ThemeProvider>
  );
};

export default App;
