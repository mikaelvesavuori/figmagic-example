import React from 'react';
import PropTypes from 'prop-types';

import ParagraphStyled from './ParagraphStyled';

const Paragraph = props => <ParagraphStyled>{props.children}</ParagraphStyled>;

Paragraph.propTypes = {
	children: PropTypes.element
};

export default Paragraph;
