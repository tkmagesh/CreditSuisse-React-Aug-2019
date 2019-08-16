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
		let { bugs, toggle, removeClosed, addNew } = this.props;
		return(
			<React.Fragment>
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
	let bugs = appState.bugsData;
	return { bugs : bugs };
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(BugTracker);