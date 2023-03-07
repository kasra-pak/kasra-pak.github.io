import React from 'react';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';
import * as S from './Email.styled';

function Email({ children }) {
  return (
    <>
      <S.EmailAddress>{children}</S.EmailAddress>
      <EmailLogo />
    </>
  );
}

export default Email;
