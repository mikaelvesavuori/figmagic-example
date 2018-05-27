import styled from 'styled-components';

import fontFamilies from 'tokens/fontFamilies.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';

const ModalStyled = styled.div`
	position: relative;
	overflow: hidden;
	background-color: rgb(230, 230, 230);
	padding: ${spacing.medium};
	margin: ${spacing.medium};

	@media screen and (max-width: 768px) {
		padding: ${spacing.small};
	}
`;

export default ModalStyled;
