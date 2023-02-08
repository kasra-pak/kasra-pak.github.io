import React from 'react';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';
import { Wrapper, EmailAddress } from './Email.styled';

function Email() {
  const emailAddress = 'kasrapak69@gmail.com';
  return (
    <Wrapper href={`mailto:${emailAddress}`}>
      <EmailAddress>{emailAddress}</EmailAddress>
      <EmailLogo />
    </Wrapper>
  );
}

export default Email;
