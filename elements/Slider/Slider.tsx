import * as React from 'react';

import SliderStyled from './SliderStyled';

interface SliderProps {
  [propName: string]: {};
}

const Slider: React.FC<SliderProps> = () => <SliderStyled type="range"></SliderStyled>;

export default Slider;
