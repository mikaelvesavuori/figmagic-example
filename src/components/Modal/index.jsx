import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Link from 'components/Link';
import Button from 'components/Button';
import Close from 'components/Close';

import ModalStyled from './ModalStyled';

const Modal = props => (
	<ModalStyled sizeTablet="12">
		<Image srcImage="https://source.unsplash.com/random/800x500" />
		<Heading>Figmagic Demo</Heading>
		<Paragraph>
			Some text here, and a <Link to="https://www.google.com">link going to Google</Link>.
		</Paragraph>
		<Button onClick={props.handleOpenModal}>This will close the modal</Button>
		<Close onClick={props.handleOpenModal} />
	</ModalStyled>
);

Modal.propTypes = {
	handleOpenModal: PropTypes.func.isRequired
};

export default Modal;
