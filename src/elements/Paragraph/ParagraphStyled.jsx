import styled from 'styled-components';

import ParagraphCss from './ParagraphCss.mjs'

// Do your regular imports like:
// import fontSizes from 'tokens/fontSizes.mjs';

// Extend the below as needed
const ParagraphStyled = styled.p`
	${ParagraphCss};
`;

export default ParagraphStyled;
