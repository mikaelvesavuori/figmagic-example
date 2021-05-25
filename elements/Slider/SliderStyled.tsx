import styled from 'styled-components';

import SliderCss from './SliderCss';

interface SliderProps {
  [propName: string]: {};
}

// Extend the below as needed
const SliderStyled = styled.input<SliderProps>`
  ${SliderCss};
`;

export default SliderStyled;
