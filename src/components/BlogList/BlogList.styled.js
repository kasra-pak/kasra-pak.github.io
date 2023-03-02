import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-block-start: 2em;

  & > article {
    max-width: 520px;
  }

  @media screen and (min-width: 1223px) {
    flex-direction: row;
    flex-wrap: wrap;

    & > article {
      min-width: 400px;
      flex: 0 0 40%;
    }
  }
`;

export { Wrapper };
