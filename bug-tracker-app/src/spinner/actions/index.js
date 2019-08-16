var spinnerActionCreators = {
	down(){
		let action = { type : 'DOWN' };
		return action;
	},
	up(){
		let action = { type : 'UP' };
		return action;
	},
	doubleUp(){
		let action = { type : 'DOUBLE_UP' };
		return action;	
	}
}

export default spinnerActionCreators;