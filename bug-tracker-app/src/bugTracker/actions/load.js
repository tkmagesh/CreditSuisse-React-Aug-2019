/*import axios from 'axios';

export function load(){
	return function(dispatch, getState){
		axios
			.get('http://localhost:3030/bugs')
			.then(function(response){
				return response.data;
			})
			.then(function(bugs){
				let action = { type : 'INIT', payload : bugs};
				dispatch(action);
			});
	}

}
*/
/*
export function load(){
	return axios
		.get('http://localhost:3030/bugs')
		.then(function(response){
			return response.data;
		})
		.then(function(bugs){
			let action = { type : 'INIT', payload : bugs};
			return action;
		});
}
*/


import { getAll } from '../services/bugApi';

/*export function load(){
	return function(dispatch, getState){
		getAll()
			.then(bugs => {
				let action = { type : 'INIT', payload : bugs};
				dispatch(action);
			})
	}
}*/

//the above using async await
export function load(){
	return async function(dispatch, getState){
		let bugs = await getAll();
		let action = { type : 'INIT', payload : bugs};
		dispatch(action);
	}
}




