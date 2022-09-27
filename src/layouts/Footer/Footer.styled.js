import styled from 'styled-components';

const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    flex-shrink: 0;
    transition: text-shadow 0.2s ease;
  }

  li:hover {
    text-shadow: var(--shadow);
  }

  a {
    padding: 0.25rem;
  }

  svg {
    width: 16px;
    transition: filter 0.2s ease;
  }

  li:hover svg {
    filter: drop-shadow(var(--shadow));
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(1rem, 2vw, 1.25rem);
    letter-spacing: 0.5px;
    max-width: 450px;
    margin-left: auto;

    svg {
      width: clamp(16px, 2.25vw, 20px);
    }
  }
`;

export { SocialLinks };
