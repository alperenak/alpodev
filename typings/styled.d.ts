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
}

type ThemeType = { readonly [T in ThemeColorEnums]: ThemeTones };

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {
    isDark: boolean;
    toggleTheme?: () => void;
  }
}
