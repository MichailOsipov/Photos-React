import React from 'react';
import ReactDOM from 'react-dom';

export default class PhotoCource extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<div className="cource">
				<div className="table-aligner">
					<div className="table-cell-aligner">
						<div className="cource-content">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}