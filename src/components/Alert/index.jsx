import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { delayTime, Wrapper, Content } from './Alert.styled';

function Alert({ show, children }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={show} timeout={delayTime} classNames="alert">
      <Wrapper role="alert" ref={nodeRef}>
        <Content>{children}</Content>
      </Wrapper>
    </CSSTransition>
  );
}

export default Alert;
