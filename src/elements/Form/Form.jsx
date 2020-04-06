import React from 'react';
import PropTypes from 'prop-types';

import FormStyled from './FormStyled';

const Form = props => <FormStyled>{props.children}</FormStyled>;

Form.propTypes = {};

export default Form;
