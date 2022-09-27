import React, { useRef } from 'react';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';

import { EmailAddress } from './Email.styled';

function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

function Email() {
  const emailText = 'kasrapak69@gmail.com';
  const emailRef = useRef();

  const resetTextWithDelay = debounce(text => {
    emailRef.current.textContent = text;
  }, 2000);

  const handleClick = () => {
    navigator.clipboard.writeText(emailText);
    emailRef.current.textContent = 'Copied to Clipboard';
    resetTextWithDelay(emailText);
  };

  return (
    <>
      <EmailAddress ref={emailRef} onClick={handleClick}>
        {emailText}
      </EmailAddress>
      <EmailLogo />
    </>
  );
}

export default Email;
