import React from 'react';
import bin from '../../img/bin.png';
import Buckets from './Buckets';
import Notes from './Notes';

const Body = props => {
	return (
		<div className="body-component">
			<div className="bodyHeader">
				<div>Manage your notes and buckets here</div>
				<img src={bin} className="sixty" title="Select Multiple Notes To Delete" />
			</div>
			<hr />
			<div className="bodyNotesList">
				<Buckets buckets={props.buckets} />
				<Notes notes={props.notes} />
			</div>
		</div>
	);
};

export default Body;
