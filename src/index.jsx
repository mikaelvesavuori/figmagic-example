import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app';

const ClientSideApp = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

render(<ClientSideApp />, document.querySelector('#root'));
