import * as React from 'react';

import InputStyled from './InputStyled';

interface InputProps {
  value: any;
  onChange(e: any): void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => (
  <InputStyled
    value={value}
    pattern=".{3,}"
    type="text"
    placeholder="Placeholder text"
    onChange={onChange}
  ></InputStyled>
);

export default Input;
