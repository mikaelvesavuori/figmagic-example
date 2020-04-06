import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Loadable from "react-loadable";

const DemoView = Loadable({
	loader: () => import("containers/DemoView"),
	loading: () => <div>Loading...</div>,
});

const App = () => (
	<Switch>
		<Route exact path="/" render={() => <DemoView />} />
		<Route render={() => <Redirect to="/" />} />
	</Switch>
);

export default withRouter(App);
