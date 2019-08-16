export function removeClosed(){
	return function(dispatch, getState){
		let bugs = getState().bugsData;
		let closedBugs = bugs.filter(bug => bug.isClosed);
		let action = { type : 'REMOVE_ALL', payload : closedBugs};
		return action;
	}
}