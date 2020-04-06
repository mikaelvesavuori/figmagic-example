import React from "react";
import PropTypes from "prop-types";

import InputStyled from "./InputStyled";

const Input = (props) => (
	<InputStyled
		placeholder="Placeholder text"
		type="text"
		onChange={props.onChange}
	/>
);

Input.propTypes = {
	onChange: PropTypes.func,
};

export default Input;
