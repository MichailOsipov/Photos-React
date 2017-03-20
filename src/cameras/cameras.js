import React from 'react';
import ReactDOM from 'react-dom';

import STATUS_ENUM from 'status-enum';

import camera1Url from './images/camera-1.png';
import camera2Url from './images/camera-2.png';
import camera3Url from './images/camera-3.png';

let cameras = [
	{
		id: 1,
		status: STATUS_ENUM.DEFAULT,
		imageUrl: camera1Url,
		imageAlt: "camera-1",
		description: <p className="camera-1-description">Беззеркальные камеры<br />
						Sony Alpha 3000, 3500, 5000,<br />
						5100, 6000, NEX-5, NEX-5T, NEX-6</p>
	},
	{
		id: 2,
		status: STATUS_ENUM.DEFAULT,		
		imageUrl: camera2Url,
		imageAlt: "camera-2",
		description: <p>Зеркальные фотокамеры<br />
						Sony SLT-A58, SLT-A65, SLT-A77,<br />
						ILCA77M2, Alpha SLT-A99</p> 
	},
	{
		id: 3,
		status: STATUS_ENUM.DEFAULT,
		imageUrl: camera3Url,
		imageAlt: "camera-3",
		description: <p>Полнокадровые камеры<br />
						Sony Alpha 7, 7R, 7S, ILCA77M2,<br />
						Alpha SLT-99</p>
	}
];

export default cameras;