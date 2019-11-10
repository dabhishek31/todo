import React from 'react';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import edit from '../../img/edit.png';
import deletes from '../../img/delete.png';
import tickEmpty from '../../img/tick-empty.png';
import tickFull from '../../img/tick-full.png';
import { connect } from 'react-redux';
import { storeNoteId } from '../../actions';
import { getFormattedTime } from '../../Utils';
import { deleteNoteFromTbl, toggleMarkerList } from '../../actions/thunk';

const ViewNotes = props => {
	const editFunc = id => {
		props.storeNoteId(id);
		props.history.push('/edit/note');
	};

	const deleteFunc = id => {
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
					type: 'file',
					bId: props.bucketId,
				});
				props.close();
			}
		});
	};

	const toggleMarker = (e, id, value) => {
		e.stopPropagation();
		props.toggleMarkerList({
			id,
			type: value,
			bId: props.bucketId,
		});
	};

	return (
		<div>
			<div
				className="modal-wrapper"
				style={{
					opacity: props.show ? '1' : '0',
				}}
			>
				<div className="modal-header">
					<div>{props.note.title}</div>
					<span className="close-modal-btn" onClick={props.close}>
						×
					</span>
				</div>
				<div className="modal-body">
					<div className="modal-text-header">
						<div>
							<div>Updated At: {getFormattedTime(props.note.dateUpdated)}</div>
							<div>Posted At: {getFormattedTime(props.note.datePosted)}</div>
						</div>
						<div>
							<img src={deletes} alt="Image" onClick={() => deleteFunc(props.note.id)} />
							{props.note.done ? (
								<img
									src={tickFull}
									alt="Selected"
									title="Mark It Not Done"
									onClick={e => toggleMarker(e, props.note.id, 0)}
								/>
							) : (
								<img
									src={tickEmpty}
									alt="Not Selected"
									title="Mark It Done"
									onClick={e => toggleMarker(e, props.note.id, 1)}
								/>
							)}
							<img src={edit} alt="Image" onClick={() => editFunc(props.note.id)} />
						</div>
					</div>
					<p>{props.note.description}</p>
				</div>
				<div className="modal-footer">
					<button className="btn-cancel" onClick={props.close}>
						CLOSE
					</button>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	deleteNote: id => {
		dispatch(deleteNoteFromTbl(id));
	},
	storeNoteId: id => {
		dispatch(storeNoteId(id));
	},
	toggleMarkerList: data => {
		dispatch(toggleMarkerList(data));
	},
});
const mapStateToProps = state => ({
	bucketId: state.bucketId,
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(ViewNotes)
);
