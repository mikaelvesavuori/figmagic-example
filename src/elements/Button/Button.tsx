import * as React from 'react';

import ButtonStyled from './ButtonStyled';

interface ButtonProps {
  children: any;
  disabled: boolean;
  [propName: string]: {};
}

const Button: React.FC<ButtonProps> = ({ disabled, children }) => (
  <ButtonStyled disabled={disabled} className={disabled ? 'Error' : 'Normal'}>
    {children ? children : 'Button text'}
  </ButtonStyled>
);

export default Button;
