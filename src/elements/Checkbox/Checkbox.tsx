import * as React from 'react';

import CheckboxStyled from './CheckboxStyled';

interface CheckboxProps {
  children?: any;
  [propName: string]: any;
}

const Checkbox: React.FC<CheckboxProps> = (props) => (
	<CheckboxStyled type="checkbox" onChange={() => props.check()} />
);

export default Checkbox;