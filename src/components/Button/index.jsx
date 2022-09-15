import React from 'react';

import { Btn } from './Button.styled';

function Button({ children, type, variant, color, elevated }) {
  return (
    <Btn type={type} variant={variant} elevated={elevated} color={color}>
      {children}
    </Btn>
  );
}

export default Button;
