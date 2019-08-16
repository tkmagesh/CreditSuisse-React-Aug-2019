import axios from 'axios';

const serviceEndpoint = 'http://localhost:3030/bugs';

export function getAll(){
	return axios
		.get(serviceEndpoint)
		.then(response => response.data);
}

export function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(serviceEndpoint, bugData)
			.then(response => response.data);
	} else {
		return axios
			.put(`${serviceEndpoint}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
}

export function remove(bugData){
	return axios
		.delete(`${serviceEndpoint}/${bugData.id}`)
		.then(response => response.data);
}