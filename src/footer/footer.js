import React from 'react';
import ReactDOM from 'react-dom';

import './footer.scss';

export default class Footer extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<footer className="footer">
				<hr className="footer_line" />
				<div className="copyright copyright_text">&copy; 2014 - 2015. Все права защищены</div>
			</footer>
		);
	}
}				
				
				
				
				
				
				
				
				
				
				
				