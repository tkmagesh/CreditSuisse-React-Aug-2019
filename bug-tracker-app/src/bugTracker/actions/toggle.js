export function toggle(bugToToggle){
	let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
	let action = { type : 'UPDATE', payload : toggledBug };
	return action;
}