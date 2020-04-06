import styled from 'styled-components';

import MicrocopyCss from './MicrocopyCss.mjs'

// Do your regular imports like:
// import fontSizes from 'tokens/fontSizes.mjs';

// Extend the below as needed
const MicrocopyStyled = styled.sub`
	${MicrocopyCss};
`;

export default MicrocopyStyled;
