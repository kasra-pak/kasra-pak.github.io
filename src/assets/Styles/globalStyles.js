import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '@/assets/images/background.svg';

const GlobalStyle = createGlobalStyle`
/* ================== */
/* Custom Properties */
/* ================ */
:root {
  --font-main: "Noto Sans", sans-serif;
  --font-heading-1: "Cuprum", sans-serif;
  --font-heading-2: "Oregano", cursive;

  /* hsl values */
  --color-brand: 212 100% 47%;
  --color-text: 221 58% 9%;
  --color-white: 0 0% 97%;

  --shadow: 0 0 3px hsl(var(--color-text) / 0.2);
}

/* ======= */
/* Resets */
/* ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 14px;
}

body,
h1,
h2,
p,
ul {
  margin: 0;
}

img,
svg {
  display: block;
  max-width: 100%;
}

button {
  font: inherit;
  background: none;
  border: none;
  padding:0;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* ============== */
/* Custom Styles */
/* ============ */
body {
  font-family: var(--font-main);
  color: hsl(var(--color-text));
  background: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -40px;
  /* min-height: 100vh; */
  overflow-x: hidden;
}
`;

export default GlobalStyle;
