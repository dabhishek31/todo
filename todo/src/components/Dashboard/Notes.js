import React, { useState } from 'react';
import swal from 'sweetalert';
import edit from '../../img/edit.png';
import deletes from '../../img/delete.png';
import notes from '../../img/notes.png';
import tickEmpty from '../../img/tick-empty.png';
import tickFull from '../../img/tick-full.png';
import { connect } from 'react-redux';
import ViewNotes from './ViewNotes';
import { deleteNoteFromTbl } from '../../actions';

const Notes = props => {
	const [isShowing, setIsShowing] = useState(false);
	const [note, setNote] = useState({});

	const openModalHandler = note => {
		setIsShowing(true);
		setNote(note);
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
				swal('Poof! Your imaginary file has been deleted!', {
					icon: 'success',
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
									<div>{data.datePosted}</div>
									<div>
										<div>
											<input type="checkbox" />
										</div>
										<img src={tickEmpty} alt="Not Selected" title="Mark It Done" />
										<img src={edit} alt="Edit" title="Edit Note" />
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
						note={note}
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
});
const mapStateToProps = state => ({
	bucketId: state.bucketId,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Notes);
