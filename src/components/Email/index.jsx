import React, { useRef, useState, useCallback } from 'react';
import { debounce } from '@/utils';
import Alert from '@/components/Alert';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';

import { Wrapper, EmailAddress } from './Email.styled';

function Email() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const emailAddress = 'kasrapak69@gmail.com';
  const emailRef = useRef();

  const copyToClipboard = e => {
    // check if user has pressed "return" key
    if (e.keyCode && e.keyCode !== 13) return;

    const isEmailAddressHidden = window.getComputedStyle(emailRef.current).display === 'none';

    navigator.clipboard.writeText(emailAddress);

    if (isEmailAddressHidden) {
      // When you click the email logo
      setIsAlertVisible(true);
      setIsAlertVisibleWithDelay(false);
    } else {
      // When you click the email text
      emailRef.current.textContent = 'Copied to Clipboard';
      resetTextWithDelay(emailAddress);
    }
  };

  const resetTextWithDelay = useCallback(
    debounce(text => {
      emailRef.current.textContent = text;
    }, 2000),
    [],
  );

  const setIsAlertVisibleWithDelay = useCallback(
    debounce(state => {
      setIsAlertVisible(state);
    }, 2000),
    [],
  );

  return (
    <>
      <Alert show={isAlertVisible}>Copied to Clipboard</Alert>

      <Wrapper tabIndex={0} onClick={copyToClipboard} onKeyDown={copyToClipboard}>
        <EmailAddress ref={emailRef}>{emailAddress}</EmailAddress>
        <EmailLogo />
      </Wrapper>
    </>
  );
}

export default Email;
