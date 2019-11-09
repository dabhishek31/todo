import React from 'react';
import { Link } from 'react-router-dom';

const sidebar = () => {
	return (
		<div className="sidebarContents">
			<div className="app-name">
				<Link exact to="/">
					To Do Application
				</Link>
			</div>
			<div className="sub-menu">
				<Link to="/create/note">Create Note</Link>
				<Link to="/create/bucket">Create Bucket</Link>
			</div>
		</div>
	);
};

export default sidebar;
