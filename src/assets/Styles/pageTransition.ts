import styled from 'styled-components';

const transitionDelay = 200;
const transitionClassName = 'page-transition';

const PageTransitionContainer = styled.div`
  flex-grow: 1;

  &.${transitionClassName}-enter {
    opacity: 0;
  }

  &.${transitionClassName}-enter-active {
    opacity: 1;
    transition: opacity ${transitionDelay}ms;
  }

  &.${transitionClassName}-exit {
    opacity: 1;
  }

  &.${transitionClassName}-exit-active {
    opacity: 0;
    transition: opacity ${transitionDelay}ms;
  }
`;

export { transitionDelay, transitionClassName, PageTransitionContainer };
