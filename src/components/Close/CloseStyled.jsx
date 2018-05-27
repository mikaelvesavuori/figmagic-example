import styled from 'styled-components';

import spacing from 'tokens/spacing';
import fontSizes from 'tokens/fontSizes';
import colors from 'tokens/colors';

// Example of aliasing into a more meaningful/semantic name when reusing a value from another context
// However, in this case this is honestly a bit stupid since a change outside of our assumed context will break this
// Make sure to create an additional value in the right context/scope instead
// = See this as a pedagogical example, and not as 'best practice'
const mobileHeight = fontSizes.headingL;

const CloseStyled = styled.div`
	position: absolute;
	border-radius: 50%;
	top: ${spacing.small};
	right: ${spacing.small};
	width: ${spacing.medium};
	height: ${spacing.medium};
	text-align: center;
	vertical-align: center;
	background-color: white;
	pointer-events: all;

	&:before {
		font-family: Helvetica Neue;
		font-size: ${fontSizes.fontSizeL};
		line-height: ${spacing.medium};
		content: 'X';
		z-index: 1;
	}

	&:hover {
		cursor: pointer;
		color: white;
		background-color: ${colors.grayBlue};
		transition: 0.5s;
	}

	@media screen and (max-width: 768px) {
		font-size: ${fontSizes.fontSizeM};

		&:before {
			line-height: ${mobileHeight};
		}
	}
`;

export default CloseStyled;
