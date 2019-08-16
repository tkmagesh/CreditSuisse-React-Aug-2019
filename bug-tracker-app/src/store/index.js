import { createStore, combineReducers, applyMiddleware } from 'redux';

import bugsReducer from '../bugTracker/reducers';
import spinnerReducer from '../spinner/reducers';


function loggerMiddleware({getState, dispatch}){
	return function(next){
		return function loggerActor(action){
			if (action.type){
				console.group(action);
				console.log('before action, state -> ', getState());
				next(action);
				console.log('after action, state -> ', getState());
				console.groupEnd();
			} else {
				next(action);
			}
		}
	}
}

//redux-thunk does this
function asyncActionMiddleware({getState, dispatch}){
	return function(next){
		return function asyncActor(action){
			if (typeof action === 'function'){
				return action(dispatch, getState);
			}
			return next(action);
		}
	}
}

function promiseMiddleware({getState, dispatch}){
	return function(next){
		return function(action){
			if (action instanceof Promise){
				action.then(actionObj => next(actionObj));
			} else {
				next(action);
			}
		}
	}
}

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

let appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncActionMiddleware, promiseMiddleware));

export default appStore;