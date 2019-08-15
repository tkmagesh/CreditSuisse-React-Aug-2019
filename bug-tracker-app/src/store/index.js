import { createStore } from 'redux';
import bugsReducer from '../bugTracker/reducers';

let appStore = createStore(bugsReducer);

export default appStore;