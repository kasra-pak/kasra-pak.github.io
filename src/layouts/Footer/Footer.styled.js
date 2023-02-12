import styled from 'styled-components';

const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  fill: hsl(${({ theme }) => theme.colors.color2});

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
    letter-spacing: 0.5px;
    max-width: 450px;
    margin-left: auto;
  }
`;

export { SocialLinks };
