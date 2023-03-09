import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  gap: 1em;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.button<{ active: boolean }>`
  font-size: clamp(0.9rem, 3.75vw, 1rem);
  background-color: ${({ theme, active }) =>
    active ? `hsl(${theme.colors.color1})` : 'transparent'};
  color: hsl(
    ${({ theme, active }) =>
      active ? theme.colors.color2 : theme.colors.color1}
  );
  text-transform: capitalize;
  border: 1px solid ${({ active }) => (active ? 'transparent' : 'currentColor')};
  border-radius: 0.5em;
  padding: 0.1em 0.5em;
  transition: ${({ theme }) =>
    theme.addTransitionOn(['color', 'background-color'])};

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

export { Wrapper, Item };
