import styled from 'styled-components';

const Wrapper = styled.article`
  background: hsl(${({ theme }) => theme.colors.color3} / 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  padding: 1.25em;
  border-radius: 0.5em;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 650px) {
    font-size: clamp(0.85rem, 1.75vw, 1.05rem);
  }
`;

const Divider = styled.span`
  display: none;
  background-color: hsl(${({ theme }) => theme.colors.color2} / 0.2);
  height: 1px;
  border-radius: 1px;

  @media screen and (min-width: 500px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.15rem, 5vw, 1.25rem);
  text-transform: capitalize;

  @media screen and (min-width: 650px) {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  }
`;

const Content = styled.p`
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  flex-grow: 1;

  @media screen and (min-width: 500px) {
    display: -webkit-box;
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

const Topics = styled.ul`
  font-size: 0.9rem;
  color: hsl(${({ theme }) => theme.colors.color1});
  text-transform: capitalize;
  display: flex;
  gap: 1em;

  @media screen and (min-width: 650px) {
    font-size: clamp(0.9rem, 1.9vw, 1.15rem);
  }
`;

const ShareBtn = styled.button`
  // Hide until the functionality is developed
  display: none;

  opacity: 0.8;

  svg {
    fill: hsl(${({ theme }) => theme.colors.color2});
    width: 16px;
  }
`;

const Date = styled.p`
  text-transform: capitalize;
`;

const Duration = styled.p`
  opacity: 0.8;
`;

export { Wrapper, Header, Footer, Divider, Title, Content, Topics, ShareBtn, Date, Duration };
