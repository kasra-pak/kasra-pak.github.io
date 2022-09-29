import styled from 'styled-components';

const delayTime = 200;

const Wrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 20%;
  left: 0;

  &.alert-enter {
    display: flex;
    opacity: 0;
  }

  &.alert-enter-active {
    opacity: 1;
    transition: opacity ${delayTime}ms ease;
  }

  &.alert-enter-done {
    display: flex;
  }

  &.alert-exit {
    display: flex;
    opacity: 1;
  }

  &.alert-exit-active {
    opacity: 0;
    transition: opacity ${delayTime}ms ease;
  }

  &.alert-exit-done {
    display: none;
  }
`;

const Content = styled.div`
  background-color: hsl(var(--color-text) / 0.9);
  color: hsl(var(--color-white));
  max-width: 80%;
  text-align: center;
  border-radius: 0.25em;
  padding: 0.5em 0.75em;
`;

export { delayTime, Wrapper, Content };
