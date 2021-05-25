import * as React from 'react';

import HrStyled from './HrStyled';

interface HrProps {
  children: any;
  [propName: string]: {};
}

const Hr: React.FC<HrProps> = ({ children }) => (
  <HrStyled />
);

export default Hr;