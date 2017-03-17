import React from 'react';
import ReactDOM from 'react-dom';

import PhotoPage from 'photo-page';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import camerasAndCourcesReducer from 'cameras-and-cources-reducer';
import cameras from 'cameras';
import cources from 'cources';

import './main.scss';

let store = createStore(camerasAndCourcesReducer, {cameras, cources});

ReactDOM.render(
	<Provider store={store}>
		<PhotoPage />
	</Provider>,
	document.getElementById('root')
);
