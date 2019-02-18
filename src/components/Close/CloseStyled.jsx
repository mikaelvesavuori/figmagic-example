import styled from 'styled-components';

import lineHeights from 'tokens/lineHeights.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';

// Example of aliasing into a more meaningful/semantic name when reusing a value from another context
// However, in this case this is honestly a bit stupid since a change outside of our assumed context will break this
// Make sure to create an additional value in the right context/scope instead
// = See this as a pedagogical example, and not as 'best practice'
const mobileHeight = fontSizes.l;

const CloseStyled = styled.div`
	position: absolute;
	border-radius: 50%;
	top: ${spacing.small};
	right: ${spacing.small};
	width: ${spacing.medium};
	height: ${spacing.medium};
	text-align: center;
	vertical-align: center;
	background-color: ${colors.white};
	pointer-events: all;

	&:before {
		font-family: 'Helvetica Neue';
		font-size: ${fontSizes.l};
		line-height: 2.25;
		content: 'X';
		z-index: 1;
	}

	&:hover {
		cursor: pointer;
		color: ${colors.white};
		background-color: ${colors.blue3};
		transition: 0.5s;
	}

	@media screen and (max-width: 768px) {
		font-size: ${fontSizes.m};

		&:before {
			line-height: ${mobileHeight};
		}
	}
`;

export default CloseStyled;
