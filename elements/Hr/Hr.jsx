import React from 'react';
import PropTypes from 'prop-types';

import HrStyled from './HrStyled';

const Hr = props => <HrStyled>{props.children}</HrStyled>;

Hr.propTypes = {};

export default Hr;
