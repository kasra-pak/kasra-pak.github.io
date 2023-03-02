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

const Item = styled.button`
  font-size: 0.9rem;
  background-color: ${({ theme, active }) => (active ? `hsl(${theme.colors.color1})` : 'transparent')};
  color: hsl(${({ theme, active }) => (active ? theme.colors.color2 : theme.colors.color1)});
  text-transform: uppercase;
  border: 1px solid ${({ active }) => (active ? 'transparent' : 'currentColor')};
  border-radius: 0.5em;
  padding: 0.2em 0.5em;
  transition: ${({ theme }) => theme.addTransitionOn(['color', 'background-color'])};
`;

export { Wrapper, Item };
