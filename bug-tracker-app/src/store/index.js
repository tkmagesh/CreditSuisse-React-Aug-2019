import { createStore, combineReducers, applyMiddleware } from 'redux';

import bugsReducer from '../bugTracker/reducers';
import spinnerReducer from '../spinner/reducers';


function loggerMiddleware({getState, dispatch}){
	return function (next){
		return function(action){
			console.group(action);
			console.log('before action, state -> ', getState());
			next(action);
			console.log('after action, state -> ', getState());
			console.groupEnd();
		}
	}
}

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

let appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default appStore;