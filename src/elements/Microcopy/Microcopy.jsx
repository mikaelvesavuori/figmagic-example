import React from "react";
import PropTypes from "prop-types";

import MicrocopyStyled from "./MicrocopyStyled";

const Microcopy = (props) => (
	<MicrocopyStyled>{props.children}</MicrocopyStyled>
);

Microcopy.propTypes = {};

export default Microcopy;
