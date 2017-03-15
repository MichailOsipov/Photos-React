import React from 'react';
import ReactDOM from 'react-dom';

import promocodeUrl from './promocode.png';
import './start-training.scss';

export default class StartTraining extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<div className="start-training">
				<h1 className="custom-header">3. Начните обучение</h1>
				<p className="comment">Укажите ваш адрес E-mail и введите специальный промокод,
				размещенный на упаковке вашего фотоаппарата,<br /> чтобы начать обучение на интерактивном
				фотокурсе <q>Фотография с Sony. Продвинутый курс</q></p>				
				<div className="find-promocode">
					<a className="custom-link" href="#promocode">Как найти промокод?</a>
					<div className="promocode-background">
						<div className="promocode-content">
							<div className="promocode-image">
								<img src={promocodeUrl} alt="promocode" />
							</div>
							<div className="promocode-description">
								<p className="average-description">Промокод находится на рекламной наклейке,<br />
								размещенной на упаковке вашей фотокамеры Sony.</p>
								<p className="small-description">Если вы не нашли наклейку или у вас есть вопросы, свяжитесь с нашей<br />
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