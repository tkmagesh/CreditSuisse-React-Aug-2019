import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
import * as serviceWorker from './serviceWorker';
import { bindActionCreators } from 'redux';

import * as bugActionCreators from './bugTracker/actions';
import appStore from './store';
import BugTracker from './bugTracker';

let bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp(){
	let bugs = appStore.getState();
	ReactDOM.render(<BugTracker bugs={bugs} {...bugActionDispatchers}/>,
		document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
