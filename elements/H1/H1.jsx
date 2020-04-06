import React from 'react';
import PropTypes from 'prop-types';

import H1Styled from './H1Styled';

const H1 = props => <H1Styled>H1 Heading Large{props.children}</H1Styled>;

H1.propTypes = {};

export default H1;
