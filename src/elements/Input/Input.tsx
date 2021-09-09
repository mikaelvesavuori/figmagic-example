import * as React from 'react';

import InputStyled from './InputStyled';

interface InputProps {
  children?: any;
	[propName: string]: any;
}

const Input: React.FC<InputProps> = ({...props}) => (
	<InputStyled type="text" placeholder="Placeholder text" onChange={(e: any) => props.onChange(e)} />
);

export default Input;