import React from 'react';
import ReactDOM from 'react-dom';

import STATUS_ENUM from 'status-enum';
import SelectCamera from 'select-camera';

import './cameras.scss';

export default class SelectCameras extends React.Component {
	constructor(props){
		super(props);
	}	
	render() {
		return (
			<div className="select-camera-model">
				<h1 className="custom-header">1. Выберите модель вашей камеры Sony</h1>
				<p className="comment">Чтобы выбрать подходящий интерактивный курс фотографии, укажите модель вашей фотокамеры Sony</p>
				<div className="cameras">
					{this.props.cameras.map(camera => 
							<SelectCamera
								key={camera.id}
								status={camera.status}
								imageUrl={camera.imageUrl}
								imageAlt={camera.imageAlt}
								description={camera.description}
								onClick={camera.status === STATUS_ENUM.ACTIVE ? () => this.props.onClickActive(camera.id) : () => this.props.onClickInactive(camera.id)}
							/>
						)
					}
				</div>
			</div>
		);
	}
}
