import React from 'react';
import PropTypes from 'prop-types';

import H4Styled from './H4Styled';

const H4 = props => <H4Styled>H4 Heading Extra Small{props.children}</H4Styled>;

H4.propTypes = {};

export default H4;
