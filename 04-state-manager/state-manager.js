var SM = (function(){	
	var currentState = undefined,
		callbacks = [],
		reducer = undefined,
		__init_action = { type : '@@INIT-ACTION' };

	function getState(){
		return currentState;
	}

	function subscribe(callback){
		callbacks.push(callback);
	}

	function triggerChange(){
		callbacks.forEach(callback => callback());
	}

	function dispatch(action){
		var newState = reducer(currentState, action);
		if (newState === currentState) return;
		currentState = newState;
		triggerChange();
	}

	function createStore(_reducer){
		reducer = _reducer;
		currentState = reducer(undefined, __init_action);
		return { getState, subscribe, dispatch };
	}

	function bindActionCreators(actionCreators, dispatch){
		let actionDispatchers = {};
		for(let key in actionCreators){
			actionDispatchers[key] = function(...args){
				let action = actionCreators[key](...args);
				dispatch(action);
			}
		}
		return actionDispatchers;
	}

	return { createStore, bindActionCreators };
})();