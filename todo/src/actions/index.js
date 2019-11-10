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

