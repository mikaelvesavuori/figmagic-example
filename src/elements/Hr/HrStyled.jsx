import styled from 'styled-components';

import HrCss from './HrCss.mjs'

// Do your regular imports like:
// import fontSizes from 'tokens/fontSizes.mjs';

// Extend the below as needed
const HrStyled = styled.hr`
	${HrCss};
`;

export default HrStyled;
