import { save } from '../services/bugApi';

/*export function toggle(bugToToggle){
	return function(dispatch, getState){
		let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		save(toggledBugData)
			.then(toggledBug => {
				let action = { type : 'UPDATE', payload : toggledBug };
				dispatch(action);		
			});
		
	}
}*/

//the above using async await
/*export function toggle(bugToToggle){
	return async function(dispatch, getState){
		let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		let toggledBug = await save(toggledBugData)
			
		let action = { type : 'UPDATE', payload : toggledBug };
		dispatch(action);		
	}
}*/

//using the promise middleware
export async function toggle(bugToToggle){
	let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
	let toggledBug = await save(toggledBugData)
	let action = { type : 'UPDATE', payload : toggledBug };
	return action;		
}