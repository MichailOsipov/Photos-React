import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'header';
import SelectCamerasContainer from 'select-cameras-container';
import SelectPhotoCourcesContainer from 'select-photo-cources-container';
import StartTraining from 'start-training';
import NewUser from 'new-user';
import Footer from 'footer';

export default class PhotoPage extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<div className="photo-page">
				<Header/>
				//исправь тут
				<div className="content">
					<SelectCamerasContainer/>
					<SelectPhotoCourcesContainer/>
					<StartTraining/>
					<NewUser/>				
					<Footer/>
				</div>
			</div>
		);
	}
}