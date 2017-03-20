import React from 'react';
import ReactDOM from 'react-dom';

import checkedIconUrl from './checked.png'
import './new-user.scss';

export default class NewUser extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeCode = this.handleChangeCode.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.getIconClassName = this.getIconClassName.bind(this);
		this.state = {email: '', code: '', emailCorrect: false};
	}
	
	handleChangeEmail(event) {
		this.setState({
			email: event.target.value, 
			emailCorrect: this.validateEmail(event.target.value)});			
	}
	
	handleChangeCode(event) {
		this.setState({code: event.target.value});
	}
	
	handleSubmit(event) {
		this.props.onSubmit(this.state.email, this.state.code);		
		
		event.preventDefault();
	}
	
	validateEmail(email) {
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	
	getIconClassName() {
		return this.state.emailCorrect ? "new-user-input-block_checked" : "new-user-input-block_hidden";
	}
	
	render() {
		return (
			<form 
				className="new-user-form"
				onSubmit={this.handleSubmit}>
				<div className="new-user-input-block">
					<span className="new-user-input-block__label">Ваш адрес E-mail:</span><br />
					<input 
						className="new-user-input-block__input new-user-input-block__input_email-input" 
						type="text" 
						name="email"
						onChange={this.handleChangeEmail}/>
					<span className={this.getIconClassName()}>
						<img src={checkedIconUrl} />
					</span>
				</div>
				<div className="new-user-input-block">
					<span className="new-user-input-block__label">Промо-код:</span><br />
					<input 
						className="new-user-input-block__input new-user-input-block__input_code-input" 
						type="text" 
						name="code"
						onChange={this.handleChangeCode}/>
				</div>
				<p className="new-user-form__hint">Мы вышлем ваш уникальный пароль и всю необходимую информацию<br /> для дальнейшего обучения</p>
				<input className="new-user-form__form-submit" type="submit" value="Начать обучение" />
			</form>
		);
	}
}