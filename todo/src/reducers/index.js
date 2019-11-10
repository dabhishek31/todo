import { RECEIVE_POSTS, UPDATE_BUCKET_ID, RECEIVE_BUCKETS } from '../actions';

const initialState = {
	dashboardData: null,
	bucketId: 1,
	buckets: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_POSTS:
			let { data, success } = action.resp;
			if (success) {
				return { ...state, dashboardData: data };
			}
			return state;
		case UPDATE_BUCKET_ID:
			return { ...state, bucketId: action.bucketId };

		case RECEIVE_BUCKETS:
			if (action.resp.success) {
				return { ...state, buckets: action.resp.data };
			}
			return state;

		default:
			return state;
	}
};

export default reducer;
