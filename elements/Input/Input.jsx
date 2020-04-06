import React from 'react';
import PropTypes from 'prop-types';

import InputStyled from './InputStyled';

const Input = props => <InputStyled placeholder="Placeholder text" type="text">Sample input{props.children}</InputStyled>;

Input.propTypes = {};

export default Input;
