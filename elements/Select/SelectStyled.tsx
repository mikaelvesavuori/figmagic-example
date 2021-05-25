import styled from 'styled-components';

import SelectCss from './SelectCss';

interface SelectProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const SelectStyled = styled.select<SelectProps>`
  ${SelectCss};
`;

export default SelectStyled;