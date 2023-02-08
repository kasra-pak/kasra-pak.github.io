import styled from 'styled-components';

const Wrapper = styled.header`
  @media screen and (min-width: 650px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
  }
`;

const Name = styled.h1`
  font-family: var(--font-heading-2);
  font-size: 1.5rem;
  color: hsl(var(--color-brand));
  text-transform: capitalize;
  letter-spacing: 0.5px;
  text-shadow: 0 0 3px hsl(var(--color-brand) / 0.1);
  transition: opacity 1s ease;

  @media screen and (min-width: 650px) {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    letter-spacing: 1px;
  }
`;

const Navbar = styled.nav`
  margin-top: 0.25em;
  border-top: 1px solid hsl(var(--color-text) / 0.1);

  @media screen and (min-width: 650px) {
    border: none;
    max-width: 500px;
    flex-basis: 35%;
  }
`;

const List = styled.ul`
  text-transform: capitalize;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
    letter-spacing: 0.5px;
  }
`;

const ListItem = styled.li`
  color: hsl(var(--color-text));
  fill: hsl(var(--color-text));
  transition: fill 0.2s ease, color 0.2s ease, text-shadow 0.2s ease;
  cursor: pointer;

  a {
    padding: 0.25em 0;
  }

  &:hover {
    color: hsl(var(--color-text));
    fill: hsl(var(--color-text));
    text-shadow: var(--shadow);
  }

  a.active {
    color: hsl(var(--color-brand));
    text-shadow: 0 0 3px hsl(var(--color-brand) / 0.1);
  }

  &:hover svg {
    transition: filter 0.2s ease;
  }

  &:hover svg {
    filter: drop-shadow(var(--shadow));
  }

  &.moon {
    width: 16px;
    margin-left: auto;
    flex-shrink: 0;
  }

  @media screen and (min-width: 650px) {
    &.moon {
      margin: 0;
      width: clamp(16px, 2.25vw, 20px);
    }
  }
`;

const ThemeToggler = styled.button`
  width: 100%;
`;

export { Wrapper, Name, Navbar, List, ListItem, ThemeToggler };
