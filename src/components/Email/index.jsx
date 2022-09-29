import React, { useRef, useState, useCallback } from 'react';
import { debounce } from '@/utils';
import Alert from '@/components/Alert';
import { ReactComponent as EmailLogo } from '@/assets/images/email.svg';

import { Wrapper, EmailAddress } from './Email.styled';
import TextToggler from '../TextToggler';

function Email() {
  // messageStatus has three states: "hidden", "asAlert", "asAlter"
  const [messageStatus, setMessageStatus] = useState('hidden');
  const emailAddress = 'kasrapak69@gmail.com';
  const emailRef = useRef();

  const copyToClipboard = e => {
    // check if user has pressed "return" key
    if (e.keyCode && e.keyCode !== 13) return;
    const emailAddressHidden = window.getComputedStyle(emailRef.current).display === 'none';
    navigator.clipboard.writeText(emailAddress);

    if (emailAddressHidden) {
      // When you click the email logo
      setMessageStatus('asAlert');
      setMessageStatusWithDelay('hidden');
    } else {
      // When you click the email text
      setMessageStatus('asAlter');
      setMessageStatusWithDelay('hidden');
    }
  };

  const setMessageStatusWithDelay = useCallback(
    debounce(state => {
      setMessageStatus(state);
    }, 2000),
    [],
  );

  return (
    <>
      <Alert show={messageStatus === 'asAlert'}>Copied to Clipboard</Alert>

      <Wrapper tabIndex={0} onClick={copyToClipboard} onKeyDown={copyToClipboard}>
        <EmailAddress ref={emailRef}>
          <TextToggler alter="Copied to Clipboard" showAlter={messageStatus === 'asAlter'}>
            {emailAddress}
          </TextToggler>
        </EmailAddress>
        <EmailLogo />
      </Wrapper>
    </>
  );
}

export default Email;
