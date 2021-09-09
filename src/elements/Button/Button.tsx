import * as React from 'react';

import ButtonStyled from './ButtonStyled';

interface ButtonProps {
  children: any;
  [propName: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
	<ButtonStyled className="Normal" {...props}>{children ? children : "Button text"}</ButtonStyled>
);

export default Button;