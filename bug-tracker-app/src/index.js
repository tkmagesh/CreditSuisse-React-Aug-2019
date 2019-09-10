import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
import * as serviceWorker from './serviceWorker';

import appStore from './store';
import { Provider } from 'react-redux';

import BugTracker from './bugTracker';
import Spinner from './spinner';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
let Index =() => (
	<div>
		<h1>My App</h1>
		<hr/>
		<Router>
			<span>
	          <Link to="/spinner/">Spinner</Link>
	         </span>
	         <span>
	          <Link to="/bugs/">Bug Tracker</Link>
	         </span>
	         <Route path="/spinner/" component={Spinner} />
	         <Route path="/bugs/" component={BugTracker} />
	     </Router>
	  </div>
);

ReactDOM.render(
	
		<Router>
		  <Provider store={appStore} >
	      <div>
	        <span>
	          <Link to="/">Home</Link>
	        </span>
	        <Route path="/" exact component={Index} />
	      </div>
	      </Provider>
	    </Router>
	,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




