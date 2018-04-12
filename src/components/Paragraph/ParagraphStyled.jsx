import styled from 'styled-components';

import * as fontFamilies from 'tokens/fontFamilies.js';
import * as fontSizes from 'tokens/fontSizes.js';
import * as colors from 'tokens/colors.js'; // Use this path pattern if building within the Figmagic folder/repo
//import * as colors from 'node_modules/figmagic/tokens/colors.js'; // Use this path pattern if you're using Figmagic as a dependency

const ParagraphStyled = styled.p`
	font-family: ${fontFamilies.fontRegular};
	font-size: ${fontSizes.fontSizeL};
	color: ${colors.darkBlue};
`;

export default ParagraphStyled;
