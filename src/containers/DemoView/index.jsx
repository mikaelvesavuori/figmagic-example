import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import DemoForm from "components/DemoForm";

class DemoView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			filled: false,
			checked: false,
		};
	}

	fill(e) {
		let filled = false;
		if (e.target.value && e.target.value !== "") filled = true;

		this.setState({
			filled,
		});
	}

	check() {
		this.setState({
			checked: !this.state.checked,
		});
	}

	submit(e) {
		e.preventDefault();
		alert(
			"Hey there cowboy! Nice seeing you actually filled out this bogus form!"
		);
	}

	render() {
		return (
			<DemoForm
				fill={(e) => this.fill(e)}
				check={(e) => this.check(e)}
				filled={this.state.filled}
				checked={this.state.checked}
				submit={(e) => this.submit(e)}
			/>
		);
	}
}

export default withRouter(DemoView);
