import styled from "styled-components";

import FormCss from "./FormCss.mjs";

import spacing from "tokens/spacing.mjs";

const FormStyled = styled.form`
	${FormCss};
	padding: ${spacing.small};
`;

export default FormStyled;
