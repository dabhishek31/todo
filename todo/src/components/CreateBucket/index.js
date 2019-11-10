import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import BucketForm from './BucketForm';
import { getBucketLists, saveBucketList } from '../../actions/thunk';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	saveBucketLists = (data) => {
		this.props.saveBucketListToDb(data);
	}
	render() {
		return (
			<div className="header-route-container">
				<Header {...this.props} />
				<div className="dashboardContents">
					<BucketForm
						saveBucketLists={this.saveBucketLists}
						buckets={this.props.buckets}
						bucketId={this.props.bucketId}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	buckets: state.buckets,
	bucketId: state.bucketId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getBuckets: bucketId => {
		dispatch(getBucketLists(bucketId));
	},
	saveBucketListToDb: data => {
		dispatch(saveBucketList(data));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
