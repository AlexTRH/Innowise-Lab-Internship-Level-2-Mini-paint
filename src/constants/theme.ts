import theme from 'styled-theming';

export const THEME_TYPE = {
  light: 'light',
  dark: 'dark',
};

export const BACKGROUND_COLOR = theme('theme', {
  light: '#fff',
  dark: '#707070',
});

export const TEXT_COLOR = theme('theme', {
  light: '#000',
  dark: '#fff',
});
