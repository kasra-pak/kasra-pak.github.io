import styled, { css } from 'styled-components';

const variants = {
  contained: css`
    background-color: hsl(var(--color));
    color: hsl(var(--color-white));
    border: 1px solid hsl(var(--color));

    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

    &:hover {
      background-color: transparent;
      color: hsl(var(--color));
      border: 1px solid currentColor;
    }
  `,
  outlined: css`
    border: 1px solid hsl(var(--color) / 0.2);
    transition: border-color 0.2s ease;

    &:hover {
      border: 1px solid hsl(var(--color));
    }
  `,
};

const colors = {
  black: css`
    --color: var(--color-text);
  `,
  blue: css`
    --color: var(--color-brand);
  `,
};

const elevated = css`
  box-shadow: 0 2px 6px hsl(var(--color) / 0.4);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  border: none;

  &:hover {
    background-color: hsl(var(--color) / 0.95);
    box-shadow: 0 6px 15px hsl(var(--color) / 0.2);
    border: none;
    color: hsl(var(--color-white));
  }
`;

const Btn = styled.button`
  --color: var(--color-text);
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  border-radius: 0.25em;
  padding: 0.6em 1em;

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }

  ${props => props.variant && variants[props.variant]}
  ${props => props.color && colors[props.color]}
  ${props => props.elevated && elevated}
`;

export { Btn };

//leftovers//
// --btn-bg: ${({ variant }) => variant === ''};
// --btn-fg: ${({ variant }) => variant === ''};
// --btn-border: ${({ variant }) => variant === ''};
// --btn-shadow: ${({ variant }) => variant === ''};
// background-color: hsl(var(--color-brand));
// color: hsl(var(--color-white));

// box-shadow: 0 2px 6px hsl(var(--color-brand) / 0.4);
// transition: background-color 0.2s ease, box-shadow 0.2s ease;

// &:hover {
//   background-color: hsl(var(--color-brand) / 0.95);
//   box-shadow: 0 6px 15px hsl(var(--color-brand) / 0.2);
// }

// .btn-primary-black {
//   background-color: hsl(var(--color-text));
//   color: hsl(var(--color-white));
//   border: 1px solid currentColor;
//   transition: background-color 0.2s ease, color 0.2s ease;
// }

// .btn-primary-black:hover {
//   background-color: hsl(var(--color-white));
//   color: hsl(var(--color-text));
// }

// .btn-secondary-black {
//   color: hsl(var(--color-text) / 0.9);
//   border: 1px solid hsl(var(--color-text) / 0.2);
//   padding: 0.6em 1em;
//   transition: border-color 0.2s ease, color 0.2s ease;
// }

// .btn-secondary-black:hover {
//   color: hsl(var(--color-text));
//   border-color: hsl(var(--color-text));
// }
