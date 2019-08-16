import React , {PureComponent} from 'react';

/*let BugItem = ({ bug, toggle }) => (
	<li>
		{bug.isClosed ? 
			(<span className="bugname closed" onClick={() => toggle(bug)} >{bug.name}</span>) 
			: (<span className="bugname" onClick={() => toggle(bug)} >{bug.name}</span>)
		}
		<div className="datetime">{bug.createdAt.toString()}</div>
	</li>
);*/

class BugItem extends PureComponent{
	render = () => {
		let { bug, toggle } = this.props;
		console.log('Bug Item rendering for - ', bug.id);
		return (
			<li>
				{bug.isClosed ? 
					(<span className="bugname closed" onClick={() => toggle(bug)} >{bug.name}</span>) 
					: (<span className="bugname" onClick={() => toggle(bug)} >{bug.name}</span>)
				}
				<div className="datetime">{bug.createdAt.toString()}</div>
			</li>
		);
	}
}

export default BugItem;