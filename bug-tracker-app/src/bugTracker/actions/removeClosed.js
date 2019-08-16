import { remove } from '../services/bugApi';

//this is not using the promise middleware because we want the 'getState'
export function removeClosed(){
	return function(dispatch, getState){
		let bugs = getState().bugsData;
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs
			.forEach(async closedBug => {
				await remove(closedBug)
				let action = { type : 'REMOVE', payload : closedBug};
				dispatch(action);
			});
	}
}