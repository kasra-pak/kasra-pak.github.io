import styled from 'styled-components';

const Wrapper = styled.main`
  flex-grow: 1;

  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 5em;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.font2};
  font-size: clamp(2rem, 11vw, 3.15rem);
  font-weight: bold;
  font-style: italic;

  &::selection {
    text-shadow: 2px 2px 0 hsl(${({ theme }) => theme.colors.color2});
  }

  @media screen and (min-width: 650px) {
    font-size: clamp(3.15rem, 6vw, 6rem);
    /* font-size: 4rem; */
  }
`;

const Subtitle = styled.p`
  text-align: justify;
  margin-top: 0.5em;
  margin-bottom: 1.5em;

  @media screen and (min-width: 340px) {
    line-height: 1.5em;
    margin-top: 0.75em;
    margin-bottom: 2.25em;
  }

  @media screen and (min-width: 650px) {
    max-width: 512px;
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

export { Wrapper, Title, Subtitle };
