import styled from 'styled-components';

import InputCss from './InputCss';

interface InputProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const InputStyled = styled.input<InputProps>`
  ${InputCss};
`;

export default InputStyled;