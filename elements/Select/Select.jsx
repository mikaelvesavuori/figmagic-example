import React from 'react';
import PropTypes from 'prop-types';

import SelectStyled from './SelectStyled';

const Select = props => <SelectStyled>Select Box{props.children}</SelectStyled>;

Select.propTypes = {};

export default Select;