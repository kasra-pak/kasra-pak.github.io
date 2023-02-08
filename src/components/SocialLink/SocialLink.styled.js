import styled from 'styled-components';

const Wrapper = styled.li`
  flex-shrink: 0;
  transition: text-shadow 0.2s ease;

  &:hover {
    text-shadow: var(--shadow);
  }

  a {
    padding: 0.25rem;
  }

  svg {
    width: 16px;
    transition: filter 0.2s ease;
  }

  &:hover svg {
    filter: drop-shadow(var(--shadow));
  }

  @media screen and (min-width: 650px) {
    svg {
      width: clamp(16px, 2.25vw, 20px);
    }
  }
`;

export { Wrapper };
