import React from 'react';
import ReactDOM from 'react-dom';

import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';

const Root = () => (
	<div>
		<Heading>Figmagic Demo</Heading>
		<Paragraph>Some text here.</Paragraph>
		<Button>Button text</Button>
	</div>
);

ReactDOM.render(<Root />, document.querySelector('#app'));
