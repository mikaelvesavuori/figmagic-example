import * as React from 'react';

import HrStyled from './HrStyled';

interface HrProps {
  [propName: string]: {};
}

const Hr: React.FC<HrProps> = () => <HrStyled></HrStyled>;

export default Hr;
