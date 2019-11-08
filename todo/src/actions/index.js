export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LOADER_TOGGLER = 'LOADER_TOGGLER';

export const receivedNotesAndBuckets = resp => ({
	type: RECEIVE_POSTS,
	resp,
});

export const loaderToggler = () => ({
	type: LOADER_TOGGLER,
});

export const getBucketAndNotes = () => {
	return dispatch => {
		// dispatch(loaderToggler());
		return fetch(`http://localhost:5000/api/getBucketList`)
			.then(res => res.json())
			.then(data => {
				console.log(data, '--output');
				dispatch(receivedNotesAndBuckets(data));
			})
			.catch(err => {
				console.log(err, '--err');
			});
	};
};
