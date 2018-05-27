import React from 'react';
import PropTypes from 'prop-types';

import ImageStyled from './ImageStyled';

const Image = props => (
	<ImageStyled>
		<img src={props.srcImage} />
	</ImageStyled>
);

Image.propTypes = {
	srcImage: PropTypes.string.isRequired
};

export default Image;
