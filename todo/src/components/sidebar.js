import React from 'react';
import { Link } from 'react-router-dom';

const sidebar = () => {
	return (
		<div className="sidebarContents">
			<Link exact to="/">
				To Do Application
			</Link>
			<Link to="/create/note">Create Note</Link>
			<Link to="/create/bucket">Create Bucket</Link>
		</div>
	);
};

export default sidebar;
