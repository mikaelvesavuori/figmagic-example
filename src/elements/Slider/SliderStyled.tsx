import styled from 'styled-components';

import SliderCss from './SliderCss';

interface SliderProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const SliderStyled = styled.input<SliderProps>`
  ${SliderCss};
`;

export default SliderStyled;