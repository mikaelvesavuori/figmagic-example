import styled from "styled-components";

import CheckboxCss from "./CheckboxCss.mjs";

import spacing from "tokens/spacing.mjs";

const CheckboxStyled = styled.input`
	${CheckboxCss};

	&:disabled {
		cursor: not-allowed;
	}
`;

export default CheckboxStyled;
