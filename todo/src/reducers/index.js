import { RECEIVE_POSTS, LOADER_TOGGLER } from '../actions';

const initialState = {
	dashboardData: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_POSTS:
			let { data, success } = action.resp;
			if (success) {
				return { ...state, dashboardData: data };
			}
			return state;
		//  return { ...state, channel: action.channel };
		// case LOADER_TOGGLER:
		// 	return { ...state, loading: true };
		default:
			return state;
	}
};

export default reducer;
