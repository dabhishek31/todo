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
	bucketId
}) 

export const storeNoteId = noteId => ({
	type: STORE_NOTE_ID,
	noteId
}) 

export const receivedNote = resp => ({
	type: STORE_NOTE,
	resp
})

export const getBucketAndNotes = bucketId => {
	return dispatch => {
		dispatch(setBucketIdInRedux(bucketId));
		return fetch(`http://localhost:5000/api/getNoteBucketList`, {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({bucketId}),
		})
			.then(res => res.json())
			.then(data => {
				dispatch(receivedNotesAndBuckets(data));
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const deleteNoteFromTbl = (id) => {
	return dispatch => {
		return fetch(`http://localhost:5000/api/deleteBucketsNotes`,{
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify(id),
		})
			.then(res => res.json())
			.then(data => {
				// dispatch(receivedBuckets(data));
				dispatch(getBucketAndNotes(id.bId));
				console.log(data);
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

export const getNotebyId = (id) => {
	return dispatch => {
		return fetch(`http://localhost:5000/api/getListById`,{
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({id}),
		})
			.then(res => res.json())
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
		return fetch(`http://localhost:5000/api/addList`, {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({data}),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data, '--err');
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};

export const saveBucketList = data => {
	return dispatch => {
		return fetch(`http://localhost:5000/api/addBuckets`, {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({data}),
		})
			.then(res => res.json())
			.then(data => {
				dispatch(getBucketLists());
				console.log(data, '--err');
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};