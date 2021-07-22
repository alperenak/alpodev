import 'styled-components';

interface ThemeTones {
  readonly LOWLIGHT?: string;
  readonly BASE: string;
  readonly HIGHLIGHT?: string;
  readonly TINT?: string;
}

export enum ThemeColorEnums {
  GENERAL = 'GENERAL',
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  PAGE_BG = 'PAGE_BG',
  TEXT = 'TEXT',
}

type ThemeType = { readonly [T in ThemeColorEnums]: ThemeTones };

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    isDark: boolean;
    toggleTheme?: () => void;
  }
}
