import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import TodoForm from './TodoForm';
import { getBucketLists, saveTodoList } from '../../actions';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		props.getBuckets();
	}

	saveTodoLists = data => {
		this.props.saveTodoList(data);
	};

	render() {
		return (
			<div className="header-route-container">
				<Header {...this.props} />
				<div className="dashboardContents">
					<TodoForm
						saveTodoLists={this.saveTodoLists}
						buckets={this.props.buckets}
						bucketId={this.props.bucketId}
						note={{
							title: '',
							description: '',
						}}
						noteFlg={false}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	buckets: state.buckets,
	bucketId: state.bucketId,
	note: state.note,
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
