import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './ButtonStyled';

const Button = props => <ButtonStyled>{props.children}</ButtonStyled>;

Button.propTypes = {
	children: PropTypes.element
};

export default Button;
