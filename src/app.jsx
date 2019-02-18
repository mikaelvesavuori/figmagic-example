import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const SomeView = Loadable({
	loader: () => import('containers/SomeView'),
	loading: () => <div>Loading...</div>
});

const App = () => (
	<Switch>
		<Route exact path="/" render={() => <SomeView />} />
		<Route render={() => <Redirect to="/" />} />
	</Switch>
);

export default withRouter(App);
