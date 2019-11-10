export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LOADER_TOGGLER = 'LOADER_TOGGLER';
export const UPDATE_BUCKET_ID = 'UPDATE_BUCKET_ID';
export const RECEIVE_BUCKETS = 'RECEIVE_BUCKETS';

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
