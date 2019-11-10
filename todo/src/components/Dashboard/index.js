import React, { Component } from 'react';
import { connect } from 'react-redux';
import Body from './Body';
import Header from '../Header';
import { getBucketAndNotes } from '../../actions';
class index extends Component {
	constructor(props) {
		super(props);
		this.getUpdatedBucketsAndNotes(props.bucketId)
	}

	getUpdatedBucketsAndNotes = (id) => {
		this.props.getBucketAndNotes(id);
	}

	shouldComponentUpdate(newProps){
		if(this.props.bucketId !== newProps.bucketId){
			this.getUpdatedBucketsAndNotes(newProps.bucketId);
		}
		return true;
	}

	render() {
		return (
			<div className="header-route-container">
				<Header {...this.props} />
				<div className="dashboardContents">
					{this.props.dashboardData && <Body {...this.props.dashboardData} />}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	dashboardData: state.dashboardData,
	bucketId: state.bucketId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getBucketAndNotes: (bucketId) => {
		dispatch(getBucketAndNotes(bucketId));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
