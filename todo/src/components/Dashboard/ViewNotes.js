import React from 'react';
import swal from 'sweetalert';
import edit from '../../img/edit.png';
import deletes from '../../img/delete.png';
import tickEmpty from '../../img/tick-empty.png';
import tickFull from '../../img/tick-full.png';
import { connect } from 'react-redux';
import { deleteNoteFromTbl } from '../../actions';

const ViewNotes = props => {
	
	const editFunc = () =>{

	}

	const deleteFunc = (id) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this note!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {
				props.deleteNote({
					id, multiDel:false, type:'file',bId: props.bucketId,
				});
				swal("Poof! Your imaginary file has been deleted!", {
					icon: "success",
				});
				props.close();
			}
		});
	}

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
						<div>{props.note.dateUpdated}</div>
						<div>
							<img src={deletes} alt="Image" onClick={() => deleteFunc(props.note.id)}/>
							<img src={tickEmpty} alt="Image" />
							<img src={edit} alt="Image" onClick={editFunc}/>
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
	deleteNote: (id) => {
		dispatch(deleteNoteFromTbl(id))
	}
});
const mapStateToProps = state => ({
	bucketId: state.bucketId,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewNotes);