import * as React from 'react';

import H3Styled from './H3Styled';

interface H3Props {
  children: any;
  [propName: string]: {};
}

const H3: React.FC<H3Props> = ({ children }) => (
  <H3Styled>{children ? children : "H3 Heading Small"}</H3Styled>
);

export default H3;