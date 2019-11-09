import React from 'react';
import dashboard from '../../img/dashboard.png';

const Header = () => {
	return (
		<div className="header-component">
			<div className="header-contents">
				<div className="headerStyle">
					<img src={dashboard} />
					<div className="headerText">DASHBOARD</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
