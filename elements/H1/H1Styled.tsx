import styled from 'styled-components';

import H1Css from './H1Css';

interface H1Props {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const H1Styled = styled.h1<H1Props>`
  ${H1Css};
`;

export default H1Styled;