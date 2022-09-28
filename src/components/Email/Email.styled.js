import styled from 'styled-components';

const EmailAddress = styled.span`
  letter-spacing: 1.5px;
  font-weight: 600;
  cursor: pointer;
  display: none;

  & + svg {
    width: 16px;
    transition: filter 0.2s ease;
    display: block;
    cursor: pointer;
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

export { EmailAddress };
