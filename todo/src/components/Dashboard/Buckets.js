import React from 'react';
import { connect } from 'react-redux';
import bucket from '../../img/bucket.png';
import info from '../../img/info.png';
import deletes from '../../img/delete.png';
import { setBucketIdInRedux } from '../../actions';

const Buckets = props => {
	const setBucketId = (event, id) => {
		event.stopPropagation();
		props.setBucketId(id);
	};
	return (
		<>
			{props.buckets &&
				props.buckets.map((data, i) => {
					return (
						<>
							<div className="lists buckets" key={i} onClick={e => setBucketId(e, data.id)}>
								<div className="bucket-icon">
									<img src={bucket} alt="Buckets Images" />
								</div>
								<div className="bucket-name">
									{data.bucketName}
									<br />
									BUCKET
								</div>
								<div className="bucket-info">
									<div>{data.bucketCreated}</div>
									<div>
										<img src={info} alt="Click here to check info" title="Information" />
										<img src={deletes} alt="Click here to delete buckets" title="Delete" />
									</div>
								</div>
							</div>
							<hr />
						</>
					);
				})}
		</>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	setBucketId: bucketId => {
		dispatch(setBucketIdInRedux(bucketId));
	},
});

export default connect(
	null,
	mapDispatchToProps
)(Buckets);
