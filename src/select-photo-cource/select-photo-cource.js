import React from 'react';
import ReactDOM from 'react-dom';

import './photo-cource.scss';

import STATUS_ENUM from 'status-enum';

export default class SelectPhotoCource extends React.Component {
	constructor(props){
		super(props);
		this.generatePhotoCourceClass = this.generatePhotoCourceClass.bind(this);
		this.generatePhotoCourceBigDescriptionClass = this.generatePhotoCourceBigDescriptionClass.bind(this);
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
	
	generatePhotoCourceBigDescriptionClass() {
		switch (this.props.status) {
			case STATUS_ENUM.ACTIVE: 
				return "cource__big-description cource__big-description-active";
			case STATUS_ENUM.DEFAULT:
				return "cource__big-description cource__big-description-inactive";
			case STATUS_ENUM.INACTIVE:
				return "cource__big-description cource__big-description-inactive";
		}
	}
	
	render() {
		return (
			<div 
				className={this.generatePhotoCourceClass()}
				onClick={this.props.onClick}>
				<div className="table-aligner">
					<div className="table-cell-aligner">
						<div>
							<img src={this.props.imageUrl} alt={this.props.imageAlt} />
							<div className={this.generatePhotoCourceBigDescriptionClass()}>
								{this.props.bigDescription}
							</div>
							<div className="cource__small-description">
								{this.props.smallDescription}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}