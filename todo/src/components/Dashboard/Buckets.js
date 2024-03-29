import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import bucket from '../../img/bucket.png';
import info from '../../img/info.png';
import deletes from '../../img/delete.png';
import { setBucketIdInRedux } from '../../actions';
import { getFormattedTime } from '../../Utils';
import { deleteNoteFromTbl } from '../../actions/thunk';

const Buckets = props => {
	const setBucketId = (event, id) => {
		event.stopPropagation();
		props.setBucketId(id);
	};
	const deleteFunc = (e, id) => {
		e.stopPropagation();
		swal({
			title: 'Are you sure?',
			text: 'Once deleted, you will not be able to recover this note!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then(willDelete => {
			if (willDelete) {
				props.deleteNote({
					id,
					multiDel: false,
					type: 'bucket',
					bId: props.bucketId,
				});
			}
		});
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
									<div>{getFormattedTime(data.bucketCreated)}</div>
									<div>
										<img
											src={info}
											alt="Click here to check info"
											title="Information"
											onClick={e => {
												e.stopPropagation();
												swal({
													html: true,
													title: 'Created At: ' + getFormattedTime(data.bucketCreated),
													text: 'Updated At: ' + getFormattedTime(data.bucketUpdated),
												});
											}}
										/>
										<img
											src={deletes}
											alt="Click here to delete buckets"
											title="Delete"
											onClick={e => deleteFunc(e, data.id)}
										/>
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
	deleteNote: id => {
		dispatch(deleteNoteFromTbl(id));
	},
});

const mapStateToProps = state => ({
	bucketId: state.bucketId,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Buckets);
