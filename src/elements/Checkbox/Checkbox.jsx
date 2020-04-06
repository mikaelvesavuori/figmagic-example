import React from "react";
import PropTypes from "prop-types";

import CheckboxStyled from "./CheckboxStyled";

const Checkbox = (props) => (
	<CheckboxStyled
		type="checkbox"
		disabled={props.disabled}
		onChange={props.onChange}
	/>
);

Checkbox.propTypes = {
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Checkbox;
