import * as React from 'react';

import CheckboxStyled from './CheckboxStyled';

interface CheckboxProps {
  disabled: boolean;
  onChange(e: any): void;
  [propName: string]: {};
}

const Checkbox: React.FC<CheckboxProps> = ({ disabled, onChange }) => (
  <CheckboxStyled type="checkbox" onChange={onChange} disabled={disabled} />
);

export default Checkbox;
