export function removeClosed(bugs){
	let closedBugs = bugs.filter(bug => bug.isClosed);
	let action = { type : 'REMOVE_ALL', payload : closedBugs};
	return action;
}