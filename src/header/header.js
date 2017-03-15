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
					<h1 className="big-header">Логотип</h1>
					<p className="header__text header__light-text">Поздравляем с покупкой</p>
					<p className="header__text header__bold-text">фотоаппарата SONY</p>
					<p className="header__comment">Самое время научиться делать потрясающие фотографии,<br />
					используя весь потенциал вашей новой фотокамеры</p>
				</div>
			</div>
		);
	}
}