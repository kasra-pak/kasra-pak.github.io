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
  font-family: ${({ theme }) => theme.fonts.font3};
  font-size: 1.5rem;
  color: hsl(${({ theme }) => theme.colors.color1});
  text-transform: capitalize;
  letter-spacing: 0.5px;
  text-shadow: 0 0 3px hsl(${({ theme }) => theme.colors.color1} / 0.1);
  transition: opacity 1s ease;

  @media screen and (min-width: 650px) {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    letter-spacing: 1px;
  }
`;

const Navbar = styled.nav`
  margin-top: 0.25em;
  border-top: 1px solid hsl(${({ theme }) => theme.colors.color2} / 0.1);

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
  color: hsl(${({ theme }) => theme.colors.color2});
  fill: hsl(${({ theme }) => theme.colors.color2});
  transition: fill 0.2s ease, color 0.2s ease, text-shadow 0.2s ease;
  cursor: pointer;

  a {
    padding: 0.25em 0;
  }

  &:hover {
    color: hsl(${({ theme }) => theme.colors.color2});
    fill: hsl(${({ theme }) => theme.colors.color2});
    text-shadow: ${({ theme }) => theme.shadows.shadow1};
  }

  a.active {
    color: hsl(${({ theme }) => theme.colors.color1});
    text-shadow: 0 0 3px hsl(${({ theme }) => theme.colors.color1} / 0.1);
  }

  &:hover svg {
    transition: filter 0.2s ease;
  }

  &:hover svg {
    filter: drop-shadow(${({ theme }) => theme.shadows.shadow1});
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
