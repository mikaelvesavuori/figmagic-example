import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './GlobalStyles';
import Grid from 'components/Grid';
import Modal from 'components/Modal';
import Button from 'components/Button';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			isModalOpen: false
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
	}

	handleOpenModal() {
		this.setState(prevState => ({
			isModalOpen: !prevState.isModalOpen
		}));
	}

	render() {
		return (
			<GlobalStyles>
				{!this.state.isModalOpen && (
					<Fragment>
						<Grid size="8">
							<Button onClick={this.handleOpenModal}>Open modal</Button>
						</Grid>
					</Fragment>
				)}
				{this.state.isModalOpen && (
					<Fragment>
						<Grid size="4">
							<Modal handleOpenModal={this.handleOpenModal} />
							<Modal handleOpenModal={this.handleOpenModal} />
							<Modal handleOpenModal={this.handleOpenModal} />
						</Grid>
					</Fragment>
				)}
			</GlobalStyles>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));
