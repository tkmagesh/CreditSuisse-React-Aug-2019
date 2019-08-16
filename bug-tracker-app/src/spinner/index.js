import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import spinnerActionCreators from './actions';

class Spinner extends Component{
	onDownClick =() => {
		this.props.down();
	}
	onUpClick =() => {
		this.props.up();
	}
	render(){
		let { value } = this.props;
		return (
			<div>
				<input type="button" value="DOWN" onClick={this.onDownClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="UP" onClick={this.onUpClick}/>
			</div>
		)
	}
}

function mapStateToProps(appState){
	let spinnerValue = appState.spinnerData;
	return { value : spinnerValue };
}

function mapDispatchToProps(dispatch){
	let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActionDispatchers;
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Spinner);


	