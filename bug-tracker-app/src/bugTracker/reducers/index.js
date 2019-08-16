function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'UPDATE'){
		let updatedBug = action.payload;
		let newState = currentState.map(bug => bug.id === updatedBug.id ? updatedBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let newState = currentState.filter(bug => bug.id !== action.payload.id);
		return newState;
	}
	if (action.type === 'INIT'){
		return action.payload;
	}
	return currentState;
}

export default bugsReducer;