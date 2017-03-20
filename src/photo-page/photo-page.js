import React from 'react';
import ReactDOM from 'react-dom';

import './photo-page.scss';

import Header from 'header';
import SelectCamerasContainer from 'select-cameras-container';
import SelectPhotoCourcesContainer from 'select-photo-cources-container';
import StartTraining from 'start-training';
import NewUserContainer from 'new-user-container';
import Footer from 'footer';

export default class PhotoPage extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<div className="photo-page">
				<Header/>
				<SelectCamerasContainer/>
				<SelectPhotoCourcesContainer/>
				<StartTraining/>
				<NewUserContainer/>				
				<Footer/>
			</div>
		);
	}
}