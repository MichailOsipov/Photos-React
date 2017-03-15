import React from 'react';
import ReactDOM from 'react-dom';

import './new-user.scss';

export default class NewUser extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<div className="new-user">
				<form className="start-training-form">
					<div className="form-block">
						<span className="new-user-text">Ваш адрес E-mail:</span><br />
						<input className="new-user-input email-input" type="text" name="email" />
					</div>
					<div className="form-block">
						<span className="new-user-text">Промо-код:</span><br />
						<input className="new-user-input code-input" type="text" name="code" />
					</div>
					<p className="hint">Мы вышлем ваш уникальный пароль и всю необходимую информацию<br /> для дальнейшего обучения</p>
					<input className="form-submit" type="button" value="Начать обучение" />
				</form>
			</div>
		);
	}
}