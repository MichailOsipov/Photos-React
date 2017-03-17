import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import SelectPhotoCources from 'select-photo-cources';

const mapStateToPhotoCourcesProps = (state) => {
	return {
		cources: state.cources
	};
};

const mapDispatchToPhotoCourcesProps = (dispatch) => {
	return {
		onClickActive:  id => {
				dispatch({
					type: 'SET_AS_INACTIVE',
					id,
					blockToChange: 'photo-cource'
				});						
			},
		onClickInactive: id => {
				dispatch({
					type: 'SET_AS_ACTIVE',
					id,
					blockToChange: 'photo-cource'
				});
			}
	};
};

const SelectPhotoCourcesContainer = connect(
	mapStateToPhotoCourcesProps,
	mapDispatchToPhotoCourcesProps
)(SelectPhotoCources);

export default SelectPhotoCourcesContainer;