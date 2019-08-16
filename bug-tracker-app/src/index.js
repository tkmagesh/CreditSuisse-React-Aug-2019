import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
import * as serviceWorker from './serviceWorker';
import { bindActionCreators } from 'redux';

import * as bugActionCreators from './bugTracker/actions';
import spinnerActionCreators from './spinner/actions';

import appStore from './store';

import BugTracker from './bugTracker';
import Spinner from './spinner';

let bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);
let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

window['store'] = appStore;

function renderApp(){
	/*let bugs = appStore.getState();
	ReactDOM.render(<BugTracker bugs={bugs} {...bugActionDispatchers}/>,
		document.getElementById('root'));*/
	/*
	let value = appStore.getState();
	ReactDOM.render(<Spinner value={value} {...spinnerActionDispatchers} />,
		document.getElementById('root'));*/

	let appState = appStore.getState();

	let bugs = appState.bugsData,
		spinnerValue = appState.spinnerData;

	ReactDOM.render(
		<div>
			<Spinner value={spinnerValue} {...spinnerActionDispatchers} />
			<hr/>
			<BugTracker bugs={bugs} {...bugActionDispatchers}/>
		</div>,
		document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
