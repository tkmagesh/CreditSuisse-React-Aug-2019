import React, { Component } from 'react';

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

export default Spinner;