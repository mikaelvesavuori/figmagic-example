import styled from 'styled-components';

import H3Css from './H3Css';

interface H3Props {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const H3Styled = styled.h3<H3Props>`
  ${H3Css};
`;

export default H3Styled;