import { DefaultTheme } from 'styled-components';

import lightBG from '@/assets/images/waves-bg-light.svg';
import darkBG from '@/assets/images/waves-bg-dark.svg';

const fonts = {
  font1: '"Noto Sans", sans-serif',
  font2: '"Cuprum", sans-serif',
  font3: '"Oregano", cursive',
};

const addTransitionOn = (arrayOfProperties: string[]) => arrayOfProperties.map(arg => `${arg} .2s ease`).join(', ');

const lightTheme: DefaultTheme = {
  name: 'light',
  fonts,
  background: lightBG,
  addTransitionOn,
  shadows: {
    shadow1: '0 0 3px hsl(221 58% 9% / 0.2)',
    shadow2: '0 2px 6px hsl(221 58% 9% / 0.1)',
    shadow3: '0 2px 6px hsl(221 58% 9% / 0.2)',
    shadow4: '0 2px 6px hsl(212 100% 47% / 0.2)',
  },
  colors: {
    color1: '212 100% 47%',
    color2: '221 58% 9%',
    color3: '0 0% 77%',
    color4: '0 0% 97%',
    color5: '246 21% 91%',
    color6: '0 0% 0% / .1',
  },
};

const darkTheme: DefaultTheme = {
  name: 'dark',
  fonts,
  background: darkBG,
  addTransitionOn,
  shadows: {
    shadow1: '0 0 3px hsl(216 100% 98% / 0.2)',
    shadow2: '0 2px 6px hsl(221 0% 0% / 0.4)',
    shadow3: '0 2px 6px hsl(221 0% 0% / 0.6)',
    shadow4: '0 2px 6px hsl(212 100% 17% / 0.6)',
  },
  colors: {
    color1: '212 100% 47%',
    color2: '216 100% 98%',
    color3: '240 0% 0%',
    color4: '222 56% 8%',
    color5: '0 0% 0%',
    color6: '0 0% 0% / .2',
  },
};

export { lightTheme, darkTheme };

// --font-main: "Noto Sans", sans-serif;
// --font-heading-1: "Cuprum", sans-serif;
// --font-heading-2: "Oregano", cursive;

// /* hsl values */
// --color-brand: 212 100% 47%;
// --color-text: 221 58% 9%;
// --color-light-gray: 0 0% 87%;
// --color-white: 0 0% 97%;

// --shadow: 0 0 3px hsl(var(--color-text) / 0.2);
