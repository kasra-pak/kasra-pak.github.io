import React from 'react';

import { Btn } from './Button.styled';

function Button({ children, type, variant, color, elevated, ...rest }) {
  return (
    <Btn type={type} variant={variant} elevated={elevated} color={color} {...rest}>
      {children}
    </Btn>
  );
}

export default Button;
