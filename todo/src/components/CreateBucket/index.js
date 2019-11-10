import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import BucketForm from './BucketForm';
import { getBucketLists, saveTodoList } from '../../actions';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	saveBucketLists(data) {
    console.log(data);
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
	saveTodoList: data => {
		dispatch(saveTodoList(data));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
