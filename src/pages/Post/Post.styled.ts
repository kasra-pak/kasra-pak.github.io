import styled from 'styled-components';

const Wrapper = styled.main`
  & > article {
    max-width: 700px;
    background-color: hsl(${({ theme }) => theme.colors.color3} / 0.2);
    padding: 0.75em 0.5em;
    backdrop-filter: blur(5px);
    border-radius: 0.5em;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 5em;
  }
`;

const Flex = styled.div`
  font-size: clamp(0.9rem, 3vw, 1.15rem);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;
`;

const Divider = styled.span`
  background-color: hsl(${({ theme }) => theme.colors.color2});
  width: 3px;
  aspect-ratio: 1;
  border-radius: 100%;
  opacity: 0.8;
`;

const Date = styled.p`
  opacity: 0.8;
  text-transform: capitalize;
`;

const Duration = styled.p`
  opacity: 0.8;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  text-transform: capitalize;
  margin-block: 0.15em;
`;

const ShareBtn = styled.button`
  // Hide until the functionality is developed
  display: none;

  margin-inline-start: auto;
  opacity: 0.8;

  svg {
    fill: hsl(${({ theme }) => theme.colors.color2});
    width: 16px;
  }
`;

const Topics = styled.ul`
  font-size: clamp(0.9rem, 3vw, 1.15rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;

  & > li {
    color: hsl(${({ theme }) => theme.colors.color1});
    text-transform: capitalize;
    padding: 0.2em 0.5em;
    border: 1px solid transparent;
    border-radius: 0.5em;
    cursor: pointer;
    transition: ${({ theme }) => theme.addTransitionOn(['border-color'])};

    &:hover {
      border: 1px solid currentColor;
    }
  }
`;

const PostContent = styled.div`
  font-size: clamp(1rem, 3vw, 1.3rem);

  margin-block-start: 1.5em;
`;

export {
  Wrapper,
  Flex,
  Divider,
  Date,
  Duration,
  ShareBtn,
  Title,
  Topics,
  PostContent,
};
