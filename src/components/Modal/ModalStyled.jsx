import styled from "styled-components";

import colors from "tokens/colors.mjs";
import fontFamilies from "tokens/fontFamilies.mjs";
import fontSizes from "tokens/fontSizes.mjs";
import spacing from "tokens/spacing.mjs";

const ModalStyled = styled.div`
	position: relative;
	overflow: hidden;
	background-color: ${colors.gray5};
	padding: ${spacing.huge};
	margin: ${spacing.huge};

	@media screen and (max-width: 768px) {
		padding: ${spacing.small};
	}
`;

export default ModalStyled;
