import React from "react";
import PropTypes from "prop-types";

import ButtonStyled from "./ButtonStyled";

const Button = (props) => (
	<ButtonStyled
		className="Normal"
		disabled={props.disabled}
		onClick={props.onClick}
	>
		{props.children}
	</ButtonStyled>
);

Button.propTypes = {
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
