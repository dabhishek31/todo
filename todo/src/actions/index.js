import { postCalls } from '../Utils';

const swal = require('sweetalert');

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LOADER_TOGGLER = 'LOADER_TOGGLER';
export const UPDATE_BUCKET_ID = 'UPDATE_BUCKET_ID';
export const RECEIVE_BUCKETS = 'RECEIVE_BUCKETS';
export const STORE_NOTE = 'STORE_NOTE';
export const STORE_NOTE_ID = 'STORE_NOTE_ID';

export const receivedNotesAndBuckets = resp => ({
	type: RECEIVE_POSTS,
	resp,
});

export const receivedBuckets = resp => ({
	type: RECEIVE_BUCKETS,
	resp,
});

export const loaderToggler = () => ({
	type: LOADER_TOGGLER,
});

export const setBucketIdInRedux = bucketId => ({
	type: UPDATE_BUCKET_ID,
	bucketId,
});

export const storeNoteId = noteId => ({
	type: STORE_NOTE_ID,
	noteId,
});

export const receivedNote = resp => ({
	type: STORE_NOTE,
	resp,
});

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
