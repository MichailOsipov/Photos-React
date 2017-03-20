import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import STATUS_ENUM from 'status-enum';
import NewUser from 'new-user';

const getActiveElements = elements => {
	return elements.filter(element => element.status == STATUS_ENUM.ACTIVE);
}

const mapStateToNewUserProps = (state) => {
	return {
		onSubmit: (email, code) => {
			let activeCameras = getActiveElements(state.cameras);
			let activeCources = getActiveElements(state.cources);
			let activeCameraToPrint = activeCameras.length === 0 ? "no chosen" : activeCameras[0].id;
			let activeCourceToPrint = activeCources.length === 0 ? "no chosen" : activeCources[0].id;
			alert(
			[
				"email: "+ email,	
				"promo-code: " + code,
				"chosen cameras: " + activeCameraToPrint,
				"chosen cources: " + activeCourceToPrint
			].join('\n'));
		}
	};
};

const NewUserContainer = connect(
	mapStateToNewUserProps,
	null
)(NewUser);

export default NewUserContainer;