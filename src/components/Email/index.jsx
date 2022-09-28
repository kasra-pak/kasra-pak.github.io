import React, { useRef, useState, useCallback } from 'react';
import Alert from '@/components/Alert';
import { debounce } from '@/utils';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';

import { EmailAddress } from './Email.styled';

function Email() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const emailText = 'kasrapak69@gmail.com';
  const emailRef = useRef();

  const copyToClipboard = e => {
    const targetElement = e.target.localName;
    const textIsClicked = targetElement === 'span' || targetElement === 'button';
    const logoIsClicked = targetElement === 'svg';

    if (textIsClicked) {
      emailRef.current.textContent = 'Copied to Clipboard';
      resetTextWithDelay(emailText);
    } else if (logoIsClicked) {
      setIsAlertVisible(true);
      setIsAlertVisibleWithDelay(false);
    }

    navigator.clipboard.writeText(emailText);
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

      <button type="button" onClick={copyToClipboard}>
        <EmailAddress ref={emailRef}>{emailText}</EmailAddress>
        <EmailLogo />
      </button>
    </>
  );
}

export default Email;
