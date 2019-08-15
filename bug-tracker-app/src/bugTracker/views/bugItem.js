import React from 'react';

let BugItem = ({ bug, toggle }) => (
	<li>
		{bug.isClosed ? 
			(<span className="bugname closed" onClick={() => toggle(bug)} >{bug.name}</span>) 
			: (<span className="bugname" onClick={() => toggle(bug)} >{bug.name}</span>)
		}
		<div className="datetime">{bug.createdAt.toString()}</div>
	</li>
);

export default BugItem;