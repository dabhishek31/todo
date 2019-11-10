import React from 'react';
import bin from '../../img/bin.png';
import back from '../../img/back.png';
import Buckets from './Buckets';
import Notes from './Notes';


const Body = props => {
	const getId = () => {
		let data = props.allBuckets.filter(obj => {
			if (obj.id === props.bucketId) {
				if (obj.bucketParent === 0) {
					return 1;
				} else {
					return obj;
				}
			}
		});
		return data[0].bucketParent === 0 ? 1 : data[0].bucketParent;
	};

	return (
		<div className="body-component">
			<div className="bodyHeader">
				<div>Manage your notes and buckets here</div>
				{props.bucketId !== 1 && (
					<img
						src={back}
						className="sixty"
						title="Back"
						onClick={() => {
							props.updateBucketId(getId());
						}}
					/>
				)}
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