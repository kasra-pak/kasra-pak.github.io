import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  background: linear-gradient(
    hsl(${({ theme }) => theme.colors.color3} / 0.2) 0%,
    transparent 50%,
    hsl(${({ theme }) => theme.colors.color3} / 0.2) 100%
  );
  border-radius: 0.5em;
  padding: 1em;
  flex-basis: 550px;

  @media screen and (min-width: 1200px) {
    align-self: flex-start;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid hsl(${({ theme }) => theme.colors.color2} / 0.1);
`;

const Title = styled.h2`
  text-transform: capitalize;
  text-shadow: ${({ theme, selectMode }) => selectMode && `0 0 3px hsl(${theme.colors.color1} / 0.1)`};

  @media screen and (min-width: 650px) {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    /* font-size: 4rem; */
  }
`;

const Container = styled.div`
  position: relative;
  overflow-y: scroll;
  /*
    overflow-x: visible;
    tricked
    (prevents cropped shadows)
  */
  margin: 0px -0.75em;
  padding: 0px 0.75em;
`;

const DropDownContainer = styled.div`
  position: absolute;
  width: calc(100% - 1.5em);
  padding: 0.75em 0;
  z-index: 1;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transform-origin: top;

  ${props =>
    props.isOpen
      ? css`
          transform: scaleY(1);
          opacity: 1;
        `
      : css`
          transform: scaleY(0);
          opacity: 0;
        `}

  @media screen and (min-width: 1200px) {
    transform: scaleY(0);
    opacity: 0;
  }
`;

const Content = styled.div`
  min-height: 200px;
  border-bottom: 1px solid hsl(${({ theme }) => theme.colors.color2} / 0.1);
  margin-bottom: 0.5em;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  transition: opacity 0.2s ease;

  opacity: ${props => (props.isHidden ? '0' : '1')};

  @media screen and (min-width: 1200px) {
    opacity: 1;
  }
`;

const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em 1em;

  & > li {
    color: hsl(${({ theme }) => theme.colors.color1});
    text-transform: uppercase;
    border: 1px solid currentColor;
    border-radius: 0.5em;
    padding: 0.25em 0.75em;
    opacity: 0.6;
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

const Description = styled.p`
  text-align: justify;

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

const Features = styled.ul`
  padding-left: 0.75em;
  display: flex;
  flex-direction: column;
  gap: 0.5em 0;
  opacity: 0.9;

  & > li {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 0 0.5em;
  }

  svg {
    width: 12px;
    fill: green;
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

const Footer = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  transition: opacity 0.2s ease;

  opacity: ${props => (props.isHidden ? '0' : '1')};
`;

export { Wrapper, Header, Title, Container, DropDownContainer, Content, Technologies, Description, Features, Footer };
