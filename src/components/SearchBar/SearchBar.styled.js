import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-block-end: 1em;
  border: 1px solid hsl(${({ theme }) => theme.colors.color2} / 0.2);
  border-radius: 0.25em;
  transition: ${({ theme }) => theme.addTransitionOn(['background-color', 'border-color'])};

  &:focus-within {
    background-color: hsl(${({ theme }) => theme.colors.color2} / 0.03);
    border: 1px solid hsl(${({ theme }) => theme.colors.color2});
  }

  @media screen and (min-width: 650px) {
    max-width: 500px;
  }
`;

const SearchBtn = styled.button`
  background-color: none;
  border: inherit;
  border-radius: inherit;
  position: absolute;
  top: 50%;
  left: clamp(4px, 1.5vw, 6px);
  padding: 0.2em;
  transform: translateY(-50%);

  > svg {
    fill: hsl(${({ theme }) => theme.colors.color2});
    width: 16px;
  }

  @media screen and (min-width: 650px) {
    left: clamp(6px, 0.85vw, 8px);

    > svg {
      width: clamp(16px, 2.25vw, 20px);
    }
  }
`;

const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.font1};
  font-size: clamp(0.9rem, 3.75vw, 1rem);
  color: hsl(${({ theme }) => theme.colors.color2});
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
  padding: 0.6em 0.75em 0.6em 2.75em;

  &::placeholder {
    color: hsl(${({ theme }) => theme.colors.color2});
    opacity: 1;
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

export { Wrapper, SearchBtn, Input };
