import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
// import TodoForm from '../Dashboard/TodoForm';
import { getBucketLists, saveTodoList, getNotebyId } from '../../actions';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		props.getBuckets();
		props.getNotebyId(props.noteId);
	}

	saveTodoLists = data => {
    // this.props.saveTodoList(data);
    console.log(data,'from index');
  };
  
	render() {
		return (
			<div className="header-route-container">
				<Header {...this.props} />
				<div className="dashboardContents">
					{/* <TodoForm
						saveTodoLists={this.saveTodoLists}
						buckets={this.props.buckets}
						bucketId={this.props.bucketId}
					/> */}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	buckets: state.buckets,
  bucketId: state.bucketId,
  noteId: state.noteId
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
  }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
