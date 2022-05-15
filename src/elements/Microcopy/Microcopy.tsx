import * as React from 'react';

import MicrocopyStyled from './MicrocopyStyled';

interface MicrocopyProps {
  children: any;
  [propName: string]: {};
}

const Microcopy: React.FC<MicrocopyProps> = ({ children, props }) => (
  <MicrocopyStyled>{children ? children : "Microcopy"}</MicrocopyStyled>
);

export default Microcopy;