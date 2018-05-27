import styled from 'styled-components';

import grid from 'tokens/grid';

const ImageStyled = styled.div`
	background-size: cover;
	overflow: hidden;
	max-height: ${grid.rowsSize * 10}px;

	img {
		width: 100%;
	}
`;

export default ImageStyled;
