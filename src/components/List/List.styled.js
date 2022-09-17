import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;

  & > li {
    background-color: hsl(var(--color-white));
    text-transform: capitalize;
    padding: 0.5em;
    border-radius: 0.25em;
    box-shadow: 0 2px 6px hsl(var(--color-text) / 0.1);
    transition: box-shadow 0.2s ease, color 0.2s ease;
    cursor: pointer;
  }

  & > li:hover {
    box-shadow: 0 2px 6px hsl(var(--color-text) / 0.2);
  }

  & > li.active {
    box-shadow: 0 2px 6px hsl(var(--color-brand) / 0.2);
    color: hsl(var(--color-brand));
  }

  @media screen and (min-width: 650px) {
    & > li {
      font-size: clamp(1rem, 2vw, 1.25rem);
    }
  }
`;

export { Wrapper };
