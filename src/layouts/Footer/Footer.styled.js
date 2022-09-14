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

  .email {
    letter-spacing: 1.5px;
    font-weight: 600;
    cursor: pointer;
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

  .email svg {
    display: block;
  }

  .email span {
    display: none;
  }

  @media screen and (min-width: 340px) {
    .email svg {
      display: none;
    }

    .email span {
      display: block;
    }
  }
`;

export { SocialLinks };
