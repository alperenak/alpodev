import { FONTS } from '../constants/theme';

export function convertHexToRGBA(hex: string, alpha: number) {
  const parsedHex = hex.replace('#', '');
  const r = parseInt(parsedHex.substring(0, 2), 16);
  const g = parseInt(parsedHex.substring(2, 4), 16);
  const b = parseInt(parsedHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${alpha})`;
}

export function hideFocusOutline() {
  return `
    &:focus {
      outline: none;
    }
  `;
}

export function userSelectNone() {
  return `
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;
}

export function transitionBackground() {
  return `
    transition: background 150ms;
  `;
}

export function lineClamp(line: number) {
  return `
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;  
    overflow: hidden;
  `;
}

export function preventAutoFill(backgroundColor: string, textColor: string) {
  /* stylelint-disable property-no-vendor-prefix, no-descending-specificity */
  return `
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      filter: none;
      -webkit-box-shadow: 0 0 0 30px ${backgroundColor} inset !important;
      -webkit-text-fill-color: ${textColor} !important;
      transition: transparent 5000s ease-in-out 0s;
    }

    &:-webkit-autofill:first-line {
      font-family: ${FONTS.BODY};
    }
  `;
  /* stylelint-disable property-no-vendor-prefix, no-descending-specificity */
}

export const fontSizeMixins = {
  h1: () => `
    font-family: ${FONTS.BODY};
    font-size: 32px;
    line-height: 36px;
`,
  h2: () => `
  font-family: ${FONTS.BODY};
  font-size: 28px;
  line-height: 36px;  
  `,
  h3: () => `
  font-family: ${FONTS.BODY};
  font-size: 22px;
  line-height: 24px;
  `,
  h4: () => `
  font-family: ${FONTS.BODY};
  font-size: 18px;
  line-height: 24px;
  `,
  h5: () => `
  font-family: ${FONTS.BODY};
  font-size: 16px;
  line-height: 24px;
  `,
  h6: () => `
  font-family: ${FONTS.BODY};
  font-size: 14px;
  line-height: 24px;
  `,
  p1: () => `
  font-family: ${FONTS.BODY};
  font-size: 14px;
  line-height: 24px;
  `,
  p2: () => `
  font-family: ${FONTS.BODY};
  font-size: 13px;
  line-height: 24px;
  `,
  p3: () => `
  font-family: ${FONTS.BODY};
  font-size: 13px;
  line-height: 18px;
  `,
  p4: () => `
  font-family: ${FONTS.BODY};
  font-size: 12px;
  line-height: 16px;
  `,
  p5: () => `
  font-family: ${FONTS.BODY};
  font-size: 12px;
  line-height: 16px;
  `,
  p6: () => `
  font-family: ${FONTS.BODY};
  font-size: 11px;
  line-height: 16px;
  `,
  p7: () => `
  font-family: ${FONTS.BODY};
  font-size: 11px;
  line-height: 16px;
  `,
  p8: () => `
  font-family: ${FONTS.BODY};
  font-size: 10px;
  line-height: 16px;
  `,
};
