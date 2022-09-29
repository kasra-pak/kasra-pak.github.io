import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  padding: 1rem;
  padding: clamp(1rem, 5vw, 2rem);
  min-height: 100vh;

  @media screen and (min-width: 568px) {
    flex-grow: 1;
    padding: clamp(2rem, 5vw, 4rem) clamp(3rem, 7vw, 6rem);
  }
`;

export { Wrapper, Content };
