import React, { Component } from 'react';

class BugEdit extends Component{
	state = { newBugName : '' };
	onAddNewClick = () => {
		this.props.addNew(this.state.newBugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" onChange={ evt => this.setState({newBugName : evt.target.value})} />
				<input type="button" value="Add New" onClick={this.onAddNewClick} />
			</section>
		)
	}
}

export default BugEdit;