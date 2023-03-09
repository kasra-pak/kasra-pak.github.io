import styled from 'styled-components';

const transitionDelay = 200;

const PageTransitionContainer = styled.div`
  flex-grow: 1;

  &.page-transition-enter {
    opacity: 0;
  }

  &.page-transition-enter-active {
    opacity: 1;
    transition: opacity ${transitionDelay}ms;
  }

  &.page-transition-exit {
    opacity: 1;
  }

  &.page-transition-exit-active {
    opacity: 0;
    transition: opacity ${transitionDelay}ms;
  }
`;

export { transitionDelay, PageTransitionContainer };
