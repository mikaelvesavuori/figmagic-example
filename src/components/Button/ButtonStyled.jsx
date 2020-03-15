import styled from "styled-components";

import fontSizes from "tokens/fontSizes.mjs";
import fontFamilies from "tokens/fontFamilies.mjs";
import spacing from "tokens/spacing.mjs";
import colors from "tokens/colors.mjs";

const ButtonStyled = styled.button`
	width: 100%;
	font-size: ${fontSizes.m};
	font-family: ${fontFamilies.medium};
	color: ${colors.gray1};
	padding: ${spacing.tiny} ${spacing.small};
`;

export default ButtonStyled;
