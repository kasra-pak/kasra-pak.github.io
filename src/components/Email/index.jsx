import React from 'react';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';
import { EmailAddress } from './Email.styled';

function Email({ children }) {
  return (
    <>
      <EmailAddress>{children}</EmailAddress>
      <EmailLogo />
    </>
  );
}

export default Email;
