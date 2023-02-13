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
    color: hsl(var(--bg-color));

    &:hover {
      border: 1px solid hsl(var(--bg-color));
    }
  `,
};

const colors = {
  black: css`
    --bg-color: ${({ theme }) => theme.colors.color2};
    --fg-color: ${({ theme }) => theme.colors.color4};
  `,
  blue: css`
    --bg-color: ${({ theme }) => theme.colors.color1};
    --fg-color: ${({ theme }) => theme.colors.color4};
  `,
  white: css`
    --bg-color: ${({ theme }) => theme.colors.color4};
    --fg-color: ${({ theme }) => theme.colors.color2};
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
    color: hsl(${({ theme }) => theme.colors.color4});
  }
`;

const Btn = styled.button`
  --bg-color: ${({ theme }) => theme.colors.color2};
  --fg-color: ${({ theme }) => theme.colors.color2};
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  border-radius: 0.25em;
  padding: 0.6em 1em;

  ${props => props.variant && variants[props.variant]}
  ${props => props.color && colors[props.color]}
  ${props => props.elevated && elevated}
  
  &:disabled {
    background-color: hsl(${({ theme }) => theme.colors.color2} / 0.1);
    color: hsl(${({ theme }) => theme.colors.color2} / 0.4);
    border: 1px solid transparent;
    box-shadow: inset 0 0 15px -10px currentColor;
    cursor: not-allowed;
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }

  transition: ${({ theme }) => theme.addTransitionOn(['color', 'background-color', 'border-color', 'box-shadow'])};
`;

export { Btn };
