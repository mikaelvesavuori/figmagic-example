import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Grid from "components/Grid";
import Modal from "components/Modal";
import Button from "components/Button";

class SomeView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false
		};
	}

	handleOpenModal = () => {
		this.setState(prevState => ({
			isModalOpen: !prevState.isModalOpen
		}));
	};

	render() {
		return (
			<div>
				{!this.state.isModalOpen && (
					<Grid size="8">
						<Button onClick={this.handleOpenModal}>Open modal</Button>
					</Grid>
				)}

				{this.state.isModalOpen && (
					<Grid size="4">
						<Modal handleOpenModal={this.handleOpenModal} />
						<Modal handleOpenModal={this.handleOpenModal} />
						<Modal handleOpenModal={this.handleOpenModal} />
					</Grid>
				)}
			</div>
		);
	}
}

SomeView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

SomeView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(SomeView);
