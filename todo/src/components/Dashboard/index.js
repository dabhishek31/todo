import React, { Component } from 'react';
import { connect } from 'react-redux';
import Body from './Body';
import { getBucketAndNotes } from '../../actions';
class index extends Component {
	constructor(props) {
		super(props);
		props.getBucketAndNotes();
	}
	render() {
		return <Body />;
	}
}

const mapStateToProps = state => ({
	dashboardData: state.dashboardData,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getBucketAndNotes: () => {
		dispatch(getBucketAndNotes());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
