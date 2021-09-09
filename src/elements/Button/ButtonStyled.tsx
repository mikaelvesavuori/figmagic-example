import styled from 'styled-components';

import ButtonCss from './ButtonCss';

interface ButtonProps {
  children: any;
  [propName: string]: any;
}

// Extend the below as needed
const ButtonStyled = styled.button<ButtonProps>`
  ${ButtonCss};
`;

export default ButtonStyled;