import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './ButtonStyled';

const Button = props => <ButtonStyled>Normal{props.children}</ButtonStyled>;

Button.propTypes = {};

export default Button;
