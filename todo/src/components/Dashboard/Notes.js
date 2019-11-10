import React, { useState } from 'react';
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';
import edit from '../../img/edit.png';
import deletes from '../../img/delete.png';
import notes from '../../img/notes.png';
import tickEmpty from '../../img/tick-empty.png';
import tickFull from '../../img/tick-full.png';
import { connect } from 'react-redux';
import ViewNotes from './ViewNotes';
import { deleteNoteFromTbl, storeNoteId, toggleMarkerList, getNotebyId } from '../../actions';
import { getFormattedTime } from '../../Utils';

const Notes = props => {
	const [isShowing, setIsShowing] = useState(false);
	const [note, setNote] = useState({});

	const openModalHandler = note => {
		setIsShowing(true);
		// setNote(note);
		props.getNotebyId(note.id);
	};

	const toggleMarker = (e, id, value) => {
		e.stopPropagation();
		props.toggleMarkerList({
			id,
			type: value,
			bId: props.bucketId,
		});
		
	};

	const editFunc = (e, id) => {
		e.stopPropagation();
		props.storeNoteId(id);
		props.history.push('/edit/note');
	};

	const closeModalHandler = () => {
		setIsShowing(false);
	};

	const deleteFunc = (e, id) => {
		e.stopPropagation();
		setIsShowing(false);
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
			}
		});
	};

	return (
		<>
			{props.notes &&
				props.notes.map((data, i) => {
					return (
						<>
							<div className="lists notes" key={i} onClick={() => openModalHandler(data)}>
								<div className="bucket-icon">
									<img src={notes} alt="Buckets Images" />
								</div>
								<div className="bucket-name">
									{data.title}
									<br />
									{data.description}
								</div>
								<div className="bucket-info">
									<div>{getFormattedTime(data.datePosted)}</div>
									<div>
										{data.done ? (
											<img
												src={tickFull}
												alt="Selected"
												title="Mark It Not Done"
												onClick={e => toggleMarker(e, data.id, 0)}
											/>
										) : (
											<img
												src={tickEmpty}
												alt="Not Selected"
												title="Mark It Done"
												onClick={e => toggleMarker(e, data.id, 1)}
											/>
										)}

										<img
											src={edit}
											alt="Edit"
											title="Edit Note"
											onClick={e => editFunc(e, data.id)}
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
			{isShowing && (
				<>
					<div onClick={closeModalHandler} className="back-drop"></div>
					<ViewNotes
						getUpdatedBucketsAndNotes={props.getUpdatedBucketsAndNotes}
						className="modal"
						note={props.note}
						show={isShowing}
						close={closeModalHandler}
					/>
				</>
			)}
		</>
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
	getNotebyId: id => {
    dispatch(getNotebyId(id))
	},
});
const mapStateToProps = state => ({
	bucketId: state.bucketId,
	note: state.note,
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Notes)
);
