import styled from 'styled-components';

import H5Css from './H5Css';

interface H5Props {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const H5Styled = styled.h5<H5Props>`
  ${H5Css};
`;

export default H5Styled;