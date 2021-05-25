import * as React from 'react';

import InputStyled from './InputStyled';

interface InputProps {
  children: any;
  [propName: string]: {};
}

const Input: React.FC<InputProps> = ({ children }) => (
  <InputStyled type="text" placeholder="Placeholder text" />
);

export default Input;