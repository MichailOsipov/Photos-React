import React from 'react';
import ReactDOM from 'react-dom';

import promocodeUrl from './promocode.png';
import './start-training.scss';

export default class StartTraining extends React.Component {
	constructor(props){
		super(props);
		this.state = {isHidden: true};
		this.displayOrHideGuide = this.displayOrHideGuide.bind(this);
		this.getPromocodeClassName = this.getPromocodeClassName.bind(this);
	}	
	
	displayOrHideGuide() {
		this.setState(prevState => ({
			isHidden: !prevState.isHidden
		}));
	}
	
	getPromocodeClassName() {
		return this.state.isHidden == true ? "promocode promocode-hidden" : "promocode";
	}
	
	render() {
		return (
			<div className="start-training">
				<h1 className="start-training__header">3. Начните обучение</h1>
				<p className="start-training__comment">Укажите ваш адрес E-mail и введите специальный промокод,
				размещенный на упаковке вашего фотоаппарата,<br /> чтобы начать обучение на интерактивном
				фотокурсе <q>Фотография с Sony. Продвинутый курс</q></p>				
				<div className="find-promocode">
					<a 
						className="find-promocode__show-guide" 
						href="#promocode"
						onClick={this.displayOrHideGuide}>Как найти промокод?</a>
					<div className={this.getPromocodeClassName()}>
						<div className="promocode-content">
							<div className="promocode__image">
								<img src={promocodeUrl} alt="promocode" />
							</div>
							<div className="promocode-description">
								<p className="promocode-description_average">Промокод находится на рекламной наклейке,<br />
								размещенной на упаковке вашей фотокамеры Sony.</p>
								<p className="promocode-description_small">Если вы не нашли наклейку или у вас есть вопросы, свяжитесь с нашей<br />
								службой поддержки по телефону 8 800 333-16-77 или электронной почте<br />
								support&#64;fotoshkola.net.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}