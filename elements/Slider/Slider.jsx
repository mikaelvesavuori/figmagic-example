import React from 'react';
import PropTypes from 'prop-types';

import SliderStyled from './SliderStyled';

const Slider = props => <SliderStyled  type="range">{props.children}</SliderStyled>;

Slider.propTypes = {};

export default Slider;