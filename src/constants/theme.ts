import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  GENERAL: { BASE: '#FF5851' },
  PAGE_BG: { BASE: '#F8F8F8' },
  WHITE: { BASE: '#FFFFFF' },
  BLACK: { BASE: '#000000' },
  TEXT: { BASE: '#1C1B20', LOWLIGHT: '#E8E8E8', HIGHLIGHT: '#FFFFFF' },
  isDark: false,
} as const;

export const darkTheme: DefaultTheme = {
  GENERAL: { BASE: '#2F80ED' },
  PAGE_BG: { BASE: '#585858' },
  WHITE: { BASE: '#FFFFFF' },
  TEXT: { BASE: '#F5F5F5', LOWLIGHT: '#E8E8E8', HIGHLIGHT: '#FFFFFF' },
  BLACK: { BASE: '#000000' },
  isDark: true,
} as const;

export const FONTWEIGHTS = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
} as const;

export const FONTS = {
  BODY: "'Open Sans', sans-serif",
} as const;

export const CHART_COLORS = [
  '#91E8E1',
  '#E4D354',
  '#F7A35C',
  '#7CB5EC',
  '#F45B5B',
  '#F15C80',
  '#90ED7D',
  '#2B908F',
  '#8085E9',
  '#434348',
];
