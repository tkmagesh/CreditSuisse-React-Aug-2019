function spinnerReducer(currentState = 0, action){
	if (action.type === 'UP') return ++currentState;
	if (action.type === 'DOWN') return --currentState;
	if (action.type === 'DOUBLE_UP') return currentState * 2;
	return currentState;
}

export default spinnerReducer;