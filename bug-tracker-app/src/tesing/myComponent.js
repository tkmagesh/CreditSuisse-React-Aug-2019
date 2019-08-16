import React from 'react';

class MyComponent extends React.Component{
	state = { message : '' };
	render(){
		return (
			<div>
				<div id="div1" abc={this.props.xyz} />
				<h1>Test Component</h1>
				<input id="button1" type="button" value="Click" onClick={evt => this.setState({message : 'Button clicked'})} />
			</div>
		)
	}
}

export default MyComponent;
