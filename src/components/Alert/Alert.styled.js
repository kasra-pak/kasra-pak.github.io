import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  opacity: ${props => (props.show ? '1' : '0')};
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 20%;
  left: 0;
  transition: opacity 0.2s ease;
`;

const Content = styled.div`
  background-color: hsl(var(--color-text) / 0.8);
  color: hsl(var(--color-white));
  max-width: 80%;
  text-align: center;
  border-radius: 0.25em;
  padding: 0.5em 0.75em;
`;

export { Wrapper, Content };
