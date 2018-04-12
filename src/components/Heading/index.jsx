import React from 'react';
import PropTypes from 'prop-types';

import HeadingStyled from './HeadingStyled';

const Heading = props => <HeadingStyled>{props.children}</HeadingStyled>;

Heading.propTypes = {
	children: PropTypes.element
};

export default Heading;
