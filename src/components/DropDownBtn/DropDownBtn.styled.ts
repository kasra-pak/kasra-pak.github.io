import styled from 'styled-components';

const Btn = styled.button`
  &.open {
    transform: rotateX(-180deg);
  }

  svg {
    width: 17px;
    fill: hsl(${({ theme }) => theme.colors.color2});
    flex-shrink: 0;
    pointer-events: none;
    transition: transform 0.2s ease;
    transition: ${({ theme }) => theme.addTransitionOn(['fill'])};
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export { Btn };
