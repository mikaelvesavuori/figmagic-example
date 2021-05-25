import styled from 'styled-components';

import MicrocopyCss from './MicrocopyCss';

interface MicrocopyProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const MicrocopyStyled = styled.sub<MicrocopyProps>`
  ${MicrocopyCss};
`;

export default MicrocopyStyled;