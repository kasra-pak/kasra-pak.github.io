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
`;

const Divider = styled.span`
  display: none;
  background-color: hsl(${({ theme }) => theme.colors.color2} / 0.2);
  height: 1px;
  border-radius: 1px;

  @media screen and (min-width: 568px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 1.15rem;
  text-transform: capitalize;
`;

const Content = styled.p`
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  @media screen and (min-width: 568px) {
    display: -webkit-box;
  }
`;

const Topics = styled.ul`
  font-size: 0.9rem;
  color: hsl(${({ theme }) => theme.colors.color1});
  text-transform: capitalize;
  display: flex;
  gap: 1em;
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
