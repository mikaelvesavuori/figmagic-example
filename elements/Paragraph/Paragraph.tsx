import * as React from 'react';

import ParagraphStyled from './ParagraphStyled';

interface ParagraphProps {
  children: any;
  [propName: string]: {};
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <ParagraphStyled>{children ? children : "Paragraph"}</ParagraphStyled>
);

export default Paragraph;