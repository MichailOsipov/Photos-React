import selectBlocksReducer from 'select-blocks-reducer';
import { combineReducers } from 'redux';

const camerasAndCourcesReducer = combineReducers({
	cameras: selectBlocksReducer,
	cources: selectBlocksReducer
});

export default camerasAndCourcesReducer;