import React, { useRef } from 'react';

import { Wrapper, Content } from './Alert.styled';

function Alert({ show, children }) {
  const alertRef = useRef();

  const handleTransition = () => {
    if (alertRef.current.style.opacity === 1) {
      alertRef.current.style.display = 'none';
    } else {
      alertRef.current.style.display = 'flex';
    }
  };

  return (
    <Wrapper role="alert" ref={alertRef} show={show} onTransitionEnd={handleTransition}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Alert;
