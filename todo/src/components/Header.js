import React from 'react';
import dashboard from '../img/dashboard.png';

const Header = props => {
	const getPageName = () => {
		switch (props.location.pathname) {
			case '/':
				return 'DASHBOARD';
			case '/create/note':
				return 'CREATE NOTES';
			case '/create/bucket':
				return 'CREATE BUCKETS';
			case '/edit/note':
				return 'EDIT NOTE';
			default:
				return 'PAGE NOT FOUND';
		}
	};

	return (
		<div className="header-component">
			<div className="header-contents">
				<div className="headerStyle">
					<img src={dashboard} />
					<div className="headerText">{getPageName()}</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
