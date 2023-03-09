import * as S from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
  color?: 'black' | 'blue' | 'white';
  elevated?: boolean;
}

function Button({
  children,
  variant = 'contained',
  color = 'blue',
  elevated = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Btn variant={variant} elevated={elevated} color={color} {...rest}>
      {children}
    </S.Btn>
  );
}

export default Button;
