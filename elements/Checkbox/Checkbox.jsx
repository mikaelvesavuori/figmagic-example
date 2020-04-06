import React from 'react';
import PropTypes from 'prop-types';

import CheckboxStyled from './CheckboxStyled';

const Checkbox = props => <CheckboxStyled type="checkbox">asdf{props.children}</CheckboxStyled>;

Checkbox.propTypes = {};

export default Checkbox;
