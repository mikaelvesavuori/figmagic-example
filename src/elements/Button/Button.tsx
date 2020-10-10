import * as React from 'react';

import ButtonStyled from './ButtonStyled';

const Button = (props) => <ButtonStyled>Button text{props.children}</ButtonStyled>;

export default Button;