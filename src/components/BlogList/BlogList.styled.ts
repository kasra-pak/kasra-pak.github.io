import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-block-start: 2em;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;

    & > a {
      flex: 0 1 500px;
    }
  }
`;

export { Wrapper };
