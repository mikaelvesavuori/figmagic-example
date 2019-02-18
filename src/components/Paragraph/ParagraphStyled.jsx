import styled from 'styled-components';

import fontFamilies from 'tokens/fontFamilies.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';

const ParagraphStyled = styled.p`
	font-family: ${fontFamilies.regular};
	font-size: ${fontSizes.m};
	color: ${colors.gray2};
`;

export default ParagraphStyled;
