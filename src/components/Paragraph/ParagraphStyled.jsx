import styled from 'styled-components';

import fontFamilies from 'tokens/fontFamilies.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';

const ParagraphStyled = styled.p`
	font-family: ${fontFamilies.fontRegular};
	font-size: ${fontSizes.fontSizeL};
	color: ${colors.blue};
`;

export default ParagraphStyled;
