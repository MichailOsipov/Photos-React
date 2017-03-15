import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'header';
import SelectCameras from 'select-cameras';
import PhotoCources from 'photo-cources';
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
					<SelectCameras/>
					<PhotoCources/>
					<StartTraining/>
					<NewUser/>				
					<Footer/>
				</div>
			</div>
		);
	}
}