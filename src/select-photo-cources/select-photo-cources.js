import React from 'react';
import ReactDOM from 'react-dom';

import STATUS_ENUM from 'status-enum';
import SelectPhotoCource from 'select-photo-cource';

import './select-photo-cources.scss';

export default class SelectPhotoCources extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="select-photo-courses">
				<h1 className="select-photo-courses__header">2. Выберите подходящий фотокурс</h1>
				<p className="select-photo-courses__comment">Вы можете выбрать курс для новичков и изучать основы фотографии и
				функции вашей фотокамеры Sony, или курс<br /> для продвинутых фотографов и
				погрузиться в изучение приёмов композиции, работы со светом и съемки в ручном режиме.</p>
				<div className="courses">
					{this.props.cources.map(cource => 
							<SelectPhotoCource
								key={cource.id}
								status={cource.status}
								imageUrl={cource.imageUrl}
								imageAlt={cource.imageAlt}
								bigDescription={cource.bigDescription}
								smallDescription={cource.smallDescription}
								onClick={cource.status === STATUS_ENUM.ACTIVE ? () => this.props.onClickActive(cource.id) : () => this.props.onClickInactive(cource.id)}
							/>
						)
					}
				</div>
			</div>
		);
	}
}