import { createGlobalStyle } from 'styled-components';
import { FONTS } from '../constants/theme';
import { transitionBackground } from './styleHelpers';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${FONTS.BODY};
  }

  html, body, #root {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.GENERAL.BASE};
    ${transitionBackground()};
    width: 100%;
  }

`;

export default GlobalStyle;
