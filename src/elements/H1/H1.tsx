import * as React from 'react';

import H1Styled from './H1Styled';

const H1 = (props) => <H1Styled>H1 Heading Large{props.children}</H1Styled>;

export default H1;