import React from 'react';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';
import * as S from './Email.styled';

interface EmailProps {
  children: React.ReactNode;
}

function Email({ children }: EmailProps) {
  return (
    <>
      <S.EmailAddress>{children}</S.EmailAddress>
      <EmailLogo />
    </>
  );
}

export default Email;
