import styled from 'styled-components';

import H4Css from './H4Css';

interface H4Props {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const H4Styled = styled.h4<H4Props>`
  ${H4Css};
`;

export default H4Styled;