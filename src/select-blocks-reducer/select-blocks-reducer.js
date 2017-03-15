const selectBlockReducer = (state, action) => {
	switch (action.type) {
		case 'SET_AS_ACTIVE':
			if (state.id !== action.id) {
				return {
					...state,
					status: "inactive"
				};
			}
			
			return {
				...state,
				status: "active"
			};
		case 'SET_AS_INACTIVE':
			return {
				...state,
				status: "default"
			}
	}
};

const selectBlocksReducer = (state = [], action) => {
	return state.map(block => selectBlockReducer(block, action));
};

export default selectBlocksReducer;