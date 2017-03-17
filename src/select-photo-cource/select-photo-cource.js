import React from 'react';
import ReactDOM from 'react-dom';

import './photo-cource.scss';

import STATUS_ENUM from 'status-enum';

export default class SelectPhotoCource extends React.Component {
	constructor(props){
		super(props);
		this.generatePhotoCourceClass = this.generatePhotoCourceClass.bind(this);
	}	
	
	generatePhotoCourceClass() {
		switch (this.props.status) {
			case STATUS_ENUM.ACTIVE: 
				return "cource cource-active";
			case STATUS_ENUM.DEFAULT:
				return "cource";
			case STATUS_ENUM.INACTIVE:
				return "cource cource-inactive";
		}
	}
	
	render() {
		return (
			<div 
				className={this.generatePhotoCourceClass()}
				onClick={this.props.onClick}>
				<div className="table-aligner">
					<div className="table-cell-aligner">
						<div className="cource-content">
							<img src={this.props.imageUrl} alt={this.props} />
							{this.props.bigDescription}
							{this.props.smallDescription}
						</div>
					</div>
				</div>
			</div>
		);
	}
}