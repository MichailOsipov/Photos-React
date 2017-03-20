import React from 'react';
import ReactDOM from 'react-dom';

import STATUS_ENUM from 'status-enum';

import './camera.scss';

export default class SelectCamera extends React.Component {
	constructor(props){
		super(props);
		this.generateCameraClass = this.generateCameraClass.bind(this);
		this.generateCameraContentClass = this.generateCameraContentClass.bind(this);
	}	
	
	generateCameraClass() {
		switch (this.props.status) {
			case STATUS_ENUM.ACTIVE: 
				return "camera camera-active";
			case STATUS_ENUM.DEFAULT:
				return "camera";
			case STATUS_ENUM.INACTIVE:
				return "camera camera-inactive";
		}
	}
	
	generateCameraContentClass() {
		switch (this.props.status) {
			case STATUS_ENUM.ACTIVE: 
				return "camera-content camera-content-active";
			case STATUS_ENUM.DEFAULT:
				return "camera-content camera-content-inactive";
			case STATUS_ENUM.INACTIVE:
				return "camera-content camera-content-inactive";
		}
	}
	render() {
		return (
			<div 
				className={this.generateCameraClass()}
				onClick={this.props.onClick}>
				<div className="table-aligner">
					<div className="table-cell-aligner">
						<div className={this.generateCameraContentClass()}>							
							<img src={this.props.imageUrl} alt={this.props.imageAlt} />
							{this.props.description}
						</div>
					</div>
				</div>
			</div>
		);
	}
}