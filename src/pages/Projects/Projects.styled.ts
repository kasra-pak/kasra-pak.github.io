import styled from 'styled-components';

const Wrapper = styled.main`
  flex-grow: 1;

  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 5em;
    align-items: flex-start;
    /* justify-content: space-between; */
  }
`;

const ProjectsListContainer = styled.section`
  background: linear-gradient(
    to bottom,
    hsl(${({ theme }) => theme.colors.color3} / 0.2),
    transparent
  );
  border-radius: 0.5em;
  padding: 1em;
  display: none;
  flex-grow: 1;
  max-width: 500px;

  & > h2 {
    font-size: 1.5rem;
    text-transform: capitalize;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    border-bottom: 1px solid hsl(${({ theme }) => theme.colors.color2} / 0.1);
    transition: ${({ theme }) => theme.addTransitionOn(['border-color'])};
  }

  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export { Wrapper, ProjectsListContainer };
