import React from 'react';
import bin from '../../img/bin.png';

const Body = () => {
	return (
		<div className="body-component">
			<div className="bodyHeader">
				<div>Manage your notes and buckets here</div>
				<img src={bin} className="sixty"/>
			</div>

			<div className="bodyNotesList">
				<hr />
			</div>
		</div>
	);
};

export default Body;
