import { createGlobalStyle, css } from 'styled-components';
// import BackgroundImage from '@/assets/images/background.jpg';
import CycloneImage from '@/assets/images/bg-cyclone.jpg';
import CycloneImageHorizontal from '@/assets/images/bg-cyclone-horizontal.jpg';

const GlobalStyle = createGlobalStyle`
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
::selection {
  background-color: hsl(${({ theme }) => theme.colors.color1} / .9);
  color: hsl(${({ theme }) => theme.colors.color4});
  text-shadow: none;
}

body {
  font-family: ${({ theme }) => theme.fonts.font1};
  color: hsl(${({ theme }) => theme.colors.color2});
  /* overflow-x: hidden; */
  overflow: hidden scroll;


  ${props =>
    props.notFound
      ? css`
          background: url(${CycloneImage});

          @media screen and (min-width: 1000px) {
            background-image: url(${CycloneImageHorizontal});
          }
        `
      : css`
          background-image: url(${({ theme }) => theme.background});
          background-position: -40px;

          @media screen and (min-width: 568px) {
            background-position: 7vw;
          }
        `}

  background-repeat: no-repeat;
  background-size: cover;
  transition: ${({ theme }) => theme.addTransitionOn(['background', 'color'])};
}
`;

export default GlobalStyle;
