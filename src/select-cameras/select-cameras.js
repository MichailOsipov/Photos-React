import React from 'react';
import ReactDOM from 'react-dom';

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
					<SelectCamera
						imageUrl={camera1Url}
						imageAlt={"camera-1"}
						description={<p className="big-description camera-1-description">Беззеркальные камеры<br />
						Sony Alpha 3000, 3500, 5000,<br />
						5100, 6000, NEX-5, NEX-5T, NEX-6</p>}
					/>
					<SelectCamera
						imageUrl={camera2Url}
						imageAlt={"camera-2"}
						description={<p className="big-description">Зеркальные фотокамеры<br />
						Sony SLT-A58, SLT-A65, SLT-A77,<br />
						ILCA77M2, Alpha SLT-A99</p>}
					/>
					<SelectCamera
						imageUrl={camera3Url}
						imageAlt={"camera-3"}
						description={<p className="big-description">Полнокадровые камеры<br />
						Sony Alpha 7, 7R, 7S, ILCA77M2,<br />
						Alpha SLT-99</p>}
					/>
				</div>
			</div>
		);
	}
}

					/*<Camera>
						<img src={camera2Url} alt="camera-2" />
						<p className="big-description">Зеркальные фотокамеры<br />
						Sony SLT-A58, SLT-A65, SLT-A77,<br />
						ILCA77M2, Alpha SLT-A99</p>
					</Camera>
					<Camera>
						<img src={camera3Url} alt="camera-3" />
						<p className="big-description">Полнокадровые камеры<br />
						Sony Alpha 7, 7R, 7S, ILCA77M2,<br />
						Alpha SLT-99</p>
					</Camera>*/