import React from 'react';

import * as S from './Button.styled';

function Button({ children, type, variant, color, elevated, ...rest }) {
  return (
    <S.Btn type={type} variant={variant} elevated={elevated} color={color} {...rest}>
      {children}
    </S.Btn>
  );
}

export default Button;
