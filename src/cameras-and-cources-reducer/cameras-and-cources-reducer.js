//import selectBlocksReducer from 'select-blocks-reducer';
import {selectCamerasReducer, selectCourcesReducer} from 'select-blocks-reducer';
import { combineReducers } from 'redux';

const camerasAndCourcesReducer = combineReducers({
	cameras: selectCamerasReducer,
	cources: selectCourcesReducer
});

export default camerasAndCourcesReducer;