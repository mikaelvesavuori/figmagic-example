import styled from 'styled-components';

import ParagraphCss from './ParagraphCss';

interface ParagraphProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const ParagraphStyled = styled.p<ParagraphProps>`
  ${ParagraphCss};
`;

export default ParagraphStyled;