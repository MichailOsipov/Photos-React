import STATUS_ENUM from 'status-enum';

const selectBlockReducer = (state, action) => {
	switch (action.type) {
		case 'SET_AS_ACTIVE':
			if (state.id !== action.id) {
				return {
					...state,
					status: STATUS_ENUM.INACTIVE
				};
			}
			
			return {
				...state,
				status: STATUS_ENUM.ACTIVE
			};
		case 'SET_AS_INACTIVE':
			return {
				...state,
				status: STATUS_ENUM.DEFAULT
			}
		default: 
			return state
	}
};

const selectBlocksReducer = (state = [], action) => {
	return state.map(block => selectBlockReducer(block, action));
};

const selectCamerasReducer = (state = [], action) => {
	return action.blockToChange === 'camera' ? selectBlocksReducer(state, action) : state;
};
const selectCourcesReducer = (state = [], action) => {
	return action.blockToChange === 'photo-cource' ? selectBlocksReducer(state, action) : state;
};
export {selectBlocksReducer, selectCamerasReducer, selectCourcesReducer};