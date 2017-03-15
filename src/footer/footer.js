import React from 'react';
import ReactDOM from 'react-dom';

import './footer.scss';

export default class Footer extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<footer>
				<hr className="footer-line" />
				<div className="copyright">&copy; 2014 - 2015. Все права защищены</div>
			</footer>
		);
	}
}				
				
				
				
				
				
				
				
				
				
				
				