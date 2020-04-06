import styled from "styled-components";

import ButtonCss from "./ButtonCss.mjs";

import colors from "tokens/colors.mjs";

const ButtonStyled = styled.button`
	${ButtonCss};
	cursor: pointer;

	&:disabled {
		background-color: ${colors.gray1};
	}
`;

export default ButtonStyled;
