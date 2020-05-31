import React from 'react';
import PropTypes from 'prop-types';

import ShadowtesterStyled from './ShadowtesterStyled';

const Shadowtester = props => <ShadowtesterStyled>{props.children}</ShadowtesterStyled>;

Shadowtester.propTypes = {};

export default Shadowtester;
