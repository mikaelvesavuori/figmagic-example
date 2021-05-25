import styled from 'styled-components';

import FormCss from './FormCss';

interface FormProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const FormStyled = styled.form<FormProps>`
  ${FormCss};
`;

export default FormStyled;