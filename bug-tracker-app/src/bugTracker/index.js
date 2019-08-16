import React, {Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bugActionCreators from './actions';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugSearch from './views/bugSearch';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

class BugTracker extends Component{
	render(){
		let { bugs, toggle, removeClosed, addNew, load } = this.props;
		return(
			<React.Fragment>
				<input type="button" value="Load" onClick={load} />
				<BugStats bugs={bugs} />
				<BugSort />
				<BugSearch />
				<BugEdit addNew={addNew} />
				<BugList {...{toggle, removeClosed, bugs}} />
			</React.Fragment>
		)
	}
}

function mapDispatchToProps(dispatch){
	let bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
	return bugActionDispatchers
}

function mapStateToProps(appState){
	/*let bugs = appState.bugsData,
		spinnerValue = appState.spinnerData;
	return { bugs : bugs.filter(bug => bug.id % 2 === spinnerValue % 2) };*/

	let bugs = appState.bugsData;
	return { bugs : bugs };
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(BugTracker);