import React from 'react';
import PropTypes from 'prop-types';

import CloseStyled from './CloseStyled';

const Close = props => <CloseStyled onClick={props.onClick} />;

Close.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Close;
