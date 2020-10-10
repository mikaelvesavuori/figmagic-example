import * as React from 'react';

import InputStyled from './InputStyled';

const Input = (props) => <InputStyled type="text" placeholder="Placeholder text">{props.children}</InputStyled>;

export default Input;