import * as React from 'react';

import H1Styled from './H1Styled';

interface H1Props {
  children: any;
  [propName: string]: {};
}

const H1: React.FC<H1Props> = ({ children }) => (
  <H1Styled>{children ? children : "H1 Heading Large"}</H1Styled>
);

export default H1;