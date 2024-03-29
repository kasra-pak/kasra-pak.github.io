import styled from 'styled-components';
import CycloneBG from '@/assets/images/bg-cyclone.svg';

const Wrapper = styled.aside`
  background-image: url(${CycloneBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 20%;
  max-width: 240px;
  flex-shrink: 0;
  display: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: hsl(${({ theme }) => theme.colors.color6});
    transition: ${({ theme }) => theme.addTransitionOn(['background-color'])};
  }

  .logo {
    fill: hsl(${({ theme }) => theme.colors.color4});
    width: clamp(35px, 5vw, 50px);
    margin: clamp(1.85rem, 4vw, 3.5rem) auto;
    cursor: help;
    transition: ${({ theme }) => theme.addTransitionOn(['fill'])};
  }

  @media screen and (min-width: 568px) {
    display: block;
  }
`;

export { Wrapper };
