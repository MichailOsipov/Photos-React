import React from 'react';
import ReactDOM from 'react-dom';

import STATUS_ENUM from 'status-enum';

import cource1Url from './images/cource-1.png';
import cource2Url from './images/cource-2.png';

let photoCources = [
	{
		id: 1,
		status: STATUS_ENUM.DEFAULT,
		imageUrl: cource1Url,
		imageAlt: "cource-1",
		bigDescription: <p className="big-description ">Зеркальные камеры SONY. Основы фотографии.</p>,
		smallDescription: <p className="small-description">Знакомство с вашей фотокамерой<br />
							Изучаем основные настройки<br />
							Съемка в автоматическом режиме<br />
							Советы начинающим фотографам</p>
	},
	{
		id: 2,
		status: STATUS_ENUM.DEFAULT,
		imageUrl: cource2Url,
		imageAlt: "cource-2",
		bigDescription: <p className="big-description">Фотография с SONY. Продвинутый курс.</p>,
		smallDescription: <p className="small-description">Композиция. Работа с кадром<br />
						Съёмка в различных условиях освещения<br />
						Снимаем уличный портрет<br />
						Пейзажная фотография</p>
	},
];

export default photoCources;