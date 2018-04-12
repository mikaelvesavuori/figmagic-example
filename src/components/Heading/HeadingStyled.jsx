import styled from 'styled-components';

import * as fontFamilies from 'tokens/fontFamilies.js';
import * as fontWeights from 'tokens/fontWeights.js';
import * as fontSizes from 'tokens/fontSizes.js'; // Use this path pattern if building within the Figmagic folder/repo
import * as colors from 'tokens/colors.js'; // Use this path pattern if building within the Figmagic folder/repo
//import * as colors from 'node_modules/figmagic/tokens/colors.js'; // Use this path pattern if you're using Figmagic as a dependency

const HeadingStyled = styled.h1`
	font-family: ${fontFamilies.fontExtralight};
	font-weight: 500; /* Reset font weight to lighter value in order to avoid bolding it, thus unsetting the */
	font-size: ${fontSizes.headingXxl};
	color: ${colors.blue};
`;

export default HeadingStyled;
