import styled from 'styled-components';

const Wrapper = styled.main`
  color: hsl(var(--color-white));
  height: 100vh;
`;

const Overlay = styled.div`
  background-color: hsl(var(--color-text) / 0.6);
  height: inherit;
`;

const Content = styled.div`
  width: 90%;
  padding-top: 5%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const Status = styled.div`
  font-size: clamp(2.5rem, 20vw, 10rem);
  display: flex;
  gap: 0.1em;

  & > svg {
    flex-shrink: 0;
    margin-right: clamp(-10px, -1vw, -4px);

    fill: hsl(var(--color-white));
    width: clamp(30px, 15vw, 100px);
  }
`;

const Title = styled.h1`
  font-family: var(--font-heading-1);
  font-size: clamp(2rem, 11vw, 3.15rem);
  font-weight: bold;
  font-style: italic;
  text-transform: capitalize;

  @media screen and (min-width: 650px) {
    font-size: clamp(3.15rem, 6vw, 6rem);
  }
`;

const Subtitle = styled.p`
  margin-bottom: 1em;

  @media screen and (min-width: 340px) {
    line-height: 1.5em;
  }

  @media screen and (min-width: 650px) {
    max-width: 512px;
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

export { Wrapper, Overlay, Title, Content, Status, Subtitle };
