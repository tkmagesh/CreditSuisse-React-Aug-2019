import { createStore, combineReducers } from 'redux';

import bugsReducer from '../bugTracker/reducers';
import spinnerReducer from '../spinner/reducers';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

let appStore = createStore(rootReducer);

export default appStore;