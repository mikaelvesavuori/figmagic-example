import React from 'react';
import PropTypes from 'prop-types';

import LinkStyled from './LinkStyled';

const Link = props => (
	<LinkStyled href={props.to} target="_self" rel="noreferrer noopener">
		{props.children}
	</LinkStyled>
);

Link.propTypes = {
	children: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired
};

export default Link;
