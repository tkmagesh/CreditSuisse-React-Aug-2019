/*let currentBugId = 0;

export function addNew(newBugName){
	let newBug = { id : ++currentBugId, name : newBugName, isClosed : false, createdAt : new Date()}
	let action = { type : 'ADD_NEW', payload : newBug };
	return action;
}*/

import { save } from '../services/bugApi';

export function addNew(newBugName){
	return function(dispatch, getState){
		let newBugData = { id : 0, name: newBugName, isClosed : false, createdAt : new Date()};
		save(newBugData)
			.then(newBug => {
				let action = { type : 'ADD_NEW', payload : newBug };
				dispatch(action);
			});
	}
}