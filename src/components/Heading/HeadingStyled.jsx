import styled from 'styled-components';

import fontFamilies from 'tokens/fontFamilies.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';

const HeadingStyled = styled.h1`
	font-family: ${fontFamilies.regular};
	font-weight: 500; /* Reset font weight to lighter value in order to avoid bolding it, thus unsetting the */
	font-size: ${fontSizes.h1};
	color: ${colors.gray1};
`;

export default HeadingStyled;
