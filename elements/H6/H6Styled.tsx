import styled from 'styled-components';

import H6Css from './H6Css';

interface H6Props {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const H6Styled = styled.h6<H6Props>`
  ${H6Css};
`;

export default H6Styled;