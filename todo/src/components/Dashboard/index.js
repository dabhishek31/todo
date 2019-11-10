import React, { Component } from 'react';
import { connect } from 'react-redux';
import Body from './Body';
import Header from '../Header';
import { setBucketIdInRedux } from '../../actions';
import { getBucketAndNotes, getBucketLists } from '../../actions/thunk';

class index extends Component {
	constructor(props) {
		super(props);
		this.getUpdatedBucketsAndNotes(props.bucketId);
		props.getBuckets();
	}

	getUpdatedBucketsAndNotes = id => {
		this.props.getBucketAndNotes(id);
	};

	shouldComponentUpdate(newProps) {
		if (this.props.bucketId !== newProps.bucketId) {
			this.getUpdatedBucketsAndNotes(newProps.bucketId);
		}
		return true;
	}

	updateBucketId = id => {
		this.props.setBucketId(id);
	};

	render() {
		return (
			<div className="header-route-container">
				<Header {...this.props} />
				<div className="dashboardContents">
					{this.props.dashboardData && (
						<Body
							updateBucketId={this.updateBucketId}
							getUpdatedBucketsAndNotes={this.getUpdatedBucketsAndNotes}
							allBuckets={this.props.buckets}
							bucketId={this.props.bucketId}
							{...this.props.dashboardData}
						/>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	dashboardData: state.dashboardData,
	bucketId: state.bucketId,
	buckets: state.buckets,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getBucketAndNotes: bucketId => {
		dispatch(getBucketAndNotes(bucketId));
	},
	getBuckets: bucketId => {
		dispatch(getBucketLists(bucketId));
	},
	setBucketId: bucketId => {
		dispatch(setBucketIdInRedux(bucketId));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
