import styled from 'styled-components';

import H2Css from './H2Css';

interface H2Props {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const H2Styled = styled.h2<H2Props>`
  ${H2Css};
`;

export default H2Styled;