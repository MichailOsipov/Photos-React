import React from 'react';
import ReactDOM from 'react-dom';

import './header.scss';

export default class Header extends React.Component {
	constructor(props){
		super(props);
	}
		render() {
		return (
			<div className="header">
				<div className="header-content">
					<h1 className="logo">Логотип</h1>
					<p className="header-content__text header-content__light-text">Поздравляем с покупкой</p>
					<p className="header-content__text header-content__bold-text">фотоаппарата SONY</p>
					<p className="header-content__comment">Самое время научиться делать потрясающие фотографии,<br />
					используя весь потенциал вашей новой фотокамеры</p>
				</div>
			</div>
		);
	}
}