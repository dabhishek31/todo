import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import TodoForm from '../CreateTodo/TodoForm';
import { saveTodoList, getNotebyId, updateTodoList } from '../../actions/thunk';
import { getBucketLists } from '../../actions/thunk';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		props.getBuckets();
		props.getNotebyId(props.noteId);
	}

	saveTodoLists = data => {
    this.props.updateTodoList(data);
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
						note={this.props.note}
						noteFlg={true}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	buckets: state.buckets,
  bucketId: state.bucketId,
	noteId: state.noteId,
	note: state.note,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getBuckets: bucketId => {
		dispatch(getBucketLists(bucketId));
  },
  saveTodoList: data => {
    dispatch(saveTodoList(data))
  },
  getNotebyId: id => {
    dispatch(getNotebyId(id))
	},
	updateTodoList: data => {
		dispatch(updateTodoList(data))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
