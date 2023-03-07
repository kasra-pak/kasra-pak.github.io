import styled from 'styled-components';

const SocialLinks = styled.ul`
  font-size: clamp(0.9rem, 4vw, 1.15rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 568px) {
    font-size: clamp(1.15rem, 2vw, 1.3rem);
    letter-spacing: 0.5px;
    max-width: 450px;
    margin-left: auto;
  }
`;

export { SocialLinks };
