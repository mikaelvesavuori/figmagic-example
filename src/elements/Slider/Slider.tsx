import * as React from 'react';

import SliderStyled from './SliderStyled';

const Slider = (props) => <SliderStyled type="range">{props.children}</SliderStyled>;

export default Slider;