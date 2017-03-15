import React from 'react';
import ReactDOM from 'react-dom';

export default class SelectCamera extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<div className="camera">
				<div className="table-aligner">
					<div className="table-cell-aligner">
						<div className="camera-content">							
							<img src={this.props.imageUrl} alt={this.props.imageAlt} />
							{this.props.description}
						</div>
					</div>
				</div>
			</div>
		);
	}
}