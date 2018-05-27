import React from 'react';
import PropTypes from 'prop-types';

import GridStyled from './GridStyled';

/* GRID
** The size prop will set a maximum size for the grid
** You should be able to put any number of components in a grid
** They will share whatever space is available
*/

const Grid = props => <GridStyled size={props.size}>{props.children}</GridStyled>;

Grid.propTypes = {
	children: PropTypes.element.isRequired,
	size: PropTypes.string.isRequired
};

export default Grid;
