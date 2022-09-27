import styled, { css } from 'styled-components';

const variants = {
  contained: css`
    background-color: hsl(var(--bg-color));
    color: hsl(var(--fg-color));
    border: 1px solid hsl(var(--bg-color));

    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

    &:hover {
      background-color: transparent;
      color: hsl(var(--bg-color));
      border: 1px solid currentColor;
    }
  `,
  outlined: css`
    border: 1px solid hsl(var(--bg-color) / 0.2);
    transition: border-color 0.2s ease;

    &:hover {
      border: 1px solid hsl(var(--bg-color));
    }
  `,
};

const colors = {
  black: css`
    --bg-color: var(--color-text);
    --fg-color: var(--color-white);
  `,
  blue: css`
    --bg-color: var(--color-brand);
    --fg-color: var(--color-white);
  `,
  white: css`
    --bg-color: var(--color-white);
    --fg-color: var(--color-text);
  `,
};

const elevated = css`
  box-shadow: 0 2px 6px hsl(var(--bg-color) / 0.4);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  border: none;

  &:hover {
    background-color: hsl(var(--bg-color) / 0.95);
    box-shadow: 0 6px 15px hsl(var(--bg-color) / 0.2);
    border: none;
    color: hsl(var(--color-white));
  }
`;

const Btn = styled.button`
  --bg-color: var(--color-text);
  --fg-color: var(--color-white);
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  border-radius: 0.25em;
  padding: 0.6em 1em;

  ${props => props.variant && variants[props.variant]}
  ${props => props.color && colors[props.color]}
  ${props => props.elevated && elevated}
  
  &:disabled {
    background-color: hsl(var(--color-text) / 0.1);
    color: hsl(var(--color-text) / 0.4);
    border: 1px solid transparent;
    box-shadow: inset 0 0 15px -10px currentColor;
    cursor: not-allowed;
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
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
