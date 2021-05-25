import styled from 'styled-components';

import CheckboxCss from './CheckboxCss';

interface CheckboxProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const CheckboxStyled = styled.input<CheckboxProps>`
  ${CheckboxCss};
`;

export default CheckboxStyled;