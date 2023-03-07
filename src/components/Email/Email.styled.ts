import styled from 'styled-components';

const EmailAddress = styled.span`
  display: none;
  letter-spacing: 1.5px;
  font-weight: 600;

  & + svg {
    display: block;
  }

  @media screen and (min-width: 340px) {
    display: block;

    & + svg {
      display: none;
    }
  }
`;

export { EmailAddress };
