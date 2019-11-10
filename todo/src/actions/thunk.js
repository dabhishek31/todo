import { postCalls } from '../Utils';
import { receivedNotesAndBuckets, receivedBuckets, setBucketIdInRedux, receivedNote } from './index';
const swal = require('sweetalert');


export const getBucketAndNotes = bucketId => {
	return dispatch => {
		dispatch(setBucketIdInRedux(bucketId));
		return postCalls(`http://localhost:5000/api/getNoteBucketList`, 'POST', { bucketId })
			.then(data => {
				dispatch(receivedNotesAndBuckets(data));
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const deleteNoteFromTbl = id => {
	return dispatch => {
		return postCalls(`http://localhost:5000/api/deleteBucketsNotes`, 'POST', id)
			.then(data => {
				swal('Success', 'Deletion success', 'success');
				dispatch(getBucketAndNotes(id.bId));
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const toggleMarkerList = data => {
	return dispatch => {
		return postCalls(`http://localhost:5000/api/toggleUpdater`, 'POST', data)
			.then(response => {
				swal('Success', 'You have changed the status', 'success');
				dispatch(getBucketAndNotes(data.bId));
				dispatch(getNotebyId(data.id));
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const getBucketLists = () => {
	return dispatch => {
		return fetch(`http://localhost:5000/api/getBucketList`)
			.then(res => res.json())
			.then(data => {
				dispatch(receivedBuckets(data));
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const updateTodoList = data => {
	return dispatch => {
		return postCalls(`http://localhost:5000/api/updateNotes`, 'POST', data)
			.then(data => {
				swal('Success', 'Note Has Been Updated', 'success');
				dispatch(getBucketAndNotes(1));
				dispatch(receivedNote(data));
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const getNotebyId = id => {
	return dispatch => {
		return postCalls(`http://localhost:5000/api/getListById`, 'POST', { id })
			.then(data => {
				dispatch(receivedNote(data));
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const saveTodoList = data => {
	return dispatch => {
		return postCalls(`http://localhost:5000/api/addList`, 'POST', { data })
			.then(data => {
				swal('Success', 'Note Has Been Created', 'success');
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const saveBucketList = data => {
	return dispatch => {
		return postCalls(`http://localhost:5000/api/addBuckets`, 'POST', { data })
			.then(res => {
				swal('Success', 'Bucket Has Been Created', 'success');
				dispatch(getBucketLists());
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};
