import styled from 'styled-components';

import InputCss from './InputCss';

interface InputProps {
  [propName: string]: {};
}

// Extend the below as needed
const InputStyled = styled.input<InputProps>`
  ${InputCss};
`;

export default InputStyled;
