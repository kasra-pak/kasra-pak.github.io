import React from 'react';

import { Wrapper, MainText, AlterText } from './TextToggler.styled';

function TextToggler({ alter, showAlter, children }) {
  return (
    <Wrapper>
      <MainText showAlter={showAlter}>{children}</MainText>
      <AlterText showAlter={showAlter}>{alter}</AlterText>
    </Wrapper>
  );
}

export default TextToggler;
