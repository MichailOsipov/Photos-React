import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import SelectCameras from 'select-cameras';

const mapStateToCamerasProps = (state) => {
	return {
		cameras: state.cameras
	};
};

const mapDispatchToCamerasProps = (dispatch) => {
	return {
		onClickActive:  id => {
				dispatch({
					type: 'SET_AS_INACTIVE',
					id,
					blockToChange: 'camera'
				});						
			},
		onClickInactive: id => {
				dispatch({
					type: 'SET_AS_ACTIVE',
					id,
					blockToChange: 'camera'
				});
			}
	};
};

const SelectCamerasContainer = connect(
	mapStateToCamerasProps,
	mapDispatchToCamerasProps
)(SelectCameras);

export default SelectCamerasContainer;