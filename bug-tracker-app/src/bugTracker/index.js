import React, {Component } from 'react';
import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugSearch from './views/bugSearch';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

class BugTracker extends Component{
	render(){
		let { bugs, toggle, removeClosed, addNew } = this.props;
		return(
			<>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugSearch />
				<BugEdit addNew={addNew} />
				<BugList {...{toggle, removeClosed, bugs}} />
			</>
		)
	}
}

export default BugTracker;