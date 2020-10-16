import styled from 'styled-components';

import HrCss from './HrCss';

interface HrProps {
  [propName: string]: {};
}

// Extend the below as needed
const HrStyled = styled.hr<HrProps>`
  ${HrCss};
`;

export default HrStyled;
