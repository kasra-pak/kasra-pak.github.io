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

const Title = styled.h2`
  font-size: 1.15rem;
  text-transform: capitalize;
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

const Topics = styled.ul`
  font-size: 0.9rem;
  color: hsl(${({ theme }) => theme.colors.color1});
  text-transform: capitalize;
  display: flex;
  gap: 1em;
`;

const ShareBtn = styled.button`
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

export { Wrapper, Header, Footer, Title, Topics, ShareBtn, Date, Duration };
