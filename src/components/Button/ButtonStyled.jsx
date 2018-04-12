import styled from 'styled-components';

import * as fontSizes from 'tokens/fontSizes.js';
import * as fontFamilies from 'tokens/fontFamilies.js';
import * as spacing from 'tokens/spacing.js';
import * as colors from 'tokens/colors.js'; // Use this path pattern if building within the Figmagic folder/repo
//import * as colors from 'node_modules/figmagic/tokens/colors.js'; // Use this path pattern if you're using Figmagic as a dependency

const ButtonStyled = styled.button`
	font-size: ${fontSizes.fontSizeL};
	font-family: ${fontFamilies.fontSemibold};
	color: ${colors.darkBlue};
	padding: ${spacing.tiny} ${spacing.small};
`;

export default ButtonStyled;
