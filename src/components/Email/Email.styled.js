import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.25em;
  cursor: pointer;
`;

const EmailAddress = styled.div`
  letter-spacing: 1.5px;
  font-weight: 600;
  display: none;
  cursor: pointer;

  & + svg {
    transition: filter 0.2s ease;
    display: block;
  }

  & + svg path {
    pointer-events: none;
  }

  @media screen and (min-width: 340px) {
    display: block;

    & + svg {
      display: none;
    }
  }
`;

export { Wrapper, EmailAddress };
