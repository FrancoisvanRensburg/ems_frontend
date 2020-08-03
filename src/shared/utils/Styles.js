import { css } from 'styled-components';

export const color = {
  backgroundLightPrimary: '#292929',
  backgroundMedium: '#1B1B1B',
  backgroundDark: '#161616',

  tabBackgroundDark: '#1B1B1B',
  tabBackgroundLight: '#484848',

  buttonGreen: 'rgba(0, 236, 126, 0.8)',
  buttonGreenHover: 'rgba(0, 236, 126, 0.95)',
  buttonPink: 'rgba(255, 0, 85, 0.8)',
  buttonPurple: 'rgba(155, 110, 255, 0.7)',
  buttonBlue: 'rgba(3, 85, 207, 0.82)',

  textHeading: 'rgba(255, 255, 255, 0.9)',
  textSubHeading: 'rgba(255, 255, 255, 0.8)',
  textTitle: 'rgba(255, 255, 255, 0.7)',
  textParagraph: 'rgba(255, 255, 255, 0.6)',
  textDim: 'rgba(255, 255, 255, 0.5)',
  textDark: '#161616',

  logoPrimaryBlue: 'rgba(33, 33, 79, 0.4)',
  logoPrimaryPink: 'rgba(255, 0, 85, 0.4)',
  logoPrimaryAmber: 'rgba(254, 184, 0, 0.4)',
  logoPrimaryGreen: 'rgba(0, 236, 126, 0.4)',
  logoPrimaryPurpleLight: 'rgba(155, 110, 255, 0.4)',
  logoPrimaryPurple: 'rgba(113, 50, 255, 0.4)',
  logoPurple: 'rgba(155, 110, 225, 0.4)',

  textHoverAmber: '#feb800',

  navLeftLink: '#4f4f4f',
};

export const progressBarColors = {
  greenComponent: 'rgba(0, 236, 126, 0.4)',
  greenFiller: 'rgba(0, 236, 126, 0.8)',
  amberComponent: 'rgba(254, 184, 0, 0.4)',
  amberFiller: 'rgba(254, 184, 0, 0.8)',
  redComponent: 'rgba(255, 0, 85, 0.4)',
  redFiller: 'rgba(255, 0, 85, 0.8)',
};

export const radius = {
  buttonRadius: '3px',
  containerRadius: '5px',
  cardRadius: '3px',
  taskRadius: '1px',
  progressRadius: '2px',
};

export const sizes = {
  appNavbarLeftWidth: 60,
  appNavbarLeftExtend: 200,
};

export const zIndexValues = {
  modal: 1000,
  modalBackdrop: 110,
  navLeft: 100,
  background: 1,
  bodyComponent: 10,
};

export const font = {
  regular: 'font-family: "NunitoStdRegular"; font-weight: normal;',
  bold: 'font-family: "NunitoStdBold"; font-weight: normal;',
  medium: 'font-family: "NunitoStdSemiBold"; font-weight: normal;',
  light: 'font-family: "NunitoStdLight"; font-weight: normal;',
  size: (size) => `font-size: ${size}px;`,
};

export const mixins = {
  boxShadowMedium: css`
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.7);
  `,
  boxShadowSidebar: css`
    box-shadow: 44px 0px 35px 0px rgba(0, 0, 0, 0.7);
  `,
};

export const shadow = {
  boxShadowMedium: '0px 4px 5px rgba(0, 0, 0, 0.7)',
  container: '0px 8px 10px rgba(0, 0, 0, 0.25)',
  cardShadow: '2px 6px 5px rgba(0, 0, 0, 0.15)',
};
