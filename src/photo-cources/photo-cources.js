import React from 'react';
import ReactDOM from 'react-dom';

import PhotoCource from 'photo-cource';

import cource1Url from './cources/cource-1.png';
import cource2Url from './cources/cource-2.png';
import './photo-cources.scss';

export default class PhotoCources extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="select-photo-courses">
				<h1 className="custom-header">2. Выберите подходящий фотокурс</h1>
				<p className="comment">Вы можете выбрать курс для новичков и изучать основы фотографии и
				функции вашей фотокамеры Sony, или курс<br /> для продвинутых фотографов и
				погрузиться в изучение приёмов композиции, работы со светом и съемки в ручном режиме.</p>
				<div className="courses">
					<PhotoCource>
						<img src={cource1Url} alt="cource-1" />
						<p className="big-description ">Зеркальные камеры SONY. Основы фотографии.</p>
						<p className="small-description">Знакомство с вашей фотокамерой<br />
						Изучаем основные настройки<br />
						Съемка в автоматическом режиме<br />
						Советы начинающим фотографам</p>
					</PhotoCource>
					<PhotoCource>
						<img src={cource2Url} alt="cource-2" />
						<p className="big-description">Фотография с SONY. Продвинутый курс.</p>
						<p className="small-description">Композиция. Работа с кадром<br />
						Съёмка в различных условиях освещения<br />
						Снимаем уличный портрет<br />
						Пейзажная фотография</p>
					</PhotoCource>
				</div>
			</div>
		);
	}
}