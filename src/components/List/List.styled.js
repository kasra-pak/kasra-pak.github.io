import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;

  & > li {
    background-color: hsl(${({ theme }) => theme.colors.color4});
    text-transform: capitalize;
    padding: 0.5em;
    border-radius: 0.25em;
    box-shadow: ${({ theme }) => theme.shadows.shadow2};
    transition: box-shadow 0.2s ease, color 0.2s ease;
    cursor: pointer;
  }

  & > li:hover {
    box-shadow: ${({ theme }) => theme.shadows.shadow3};
  }

  & > li.active {
    box-shadow: ${({ theme }) => theme.shadows.shadow4};
    color: hsl(${({ theme }) => theme.colors.color1});
  }

  @media screen and (min-width: 650px) {
    & > li {
      font-size: clamp(1rem, 2vw, 1.25rem);
    }
  }
`;

export { Wrapper };
