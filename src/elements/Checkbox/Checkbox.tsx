import * as React from 'react';

import CheckboxStyled from './CheckboxStyled';

const Checkbox = (props) => <CheckboxStyled type="checkbox">{props.children}</CheckboxStyled>;

export default Checkbox;