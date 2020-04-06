import React from "react";
import PropTypes from "prop-types";

import H2Styled from "./H2Styled";

const H2 = (props) => <H2Styled>{props.children}</H2Styled>;

H2.propTypes = {};

export default H2;
