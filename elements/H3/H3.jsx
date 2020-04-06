import React from 'react';
import PropTypes from 'prop-types';

import H3Styled from './H3Styled';

const H3 = props => <H3Styled>H3 Heading Small{props.children}</H3Styled>;

H3.propTypes = {};

export default H3;
