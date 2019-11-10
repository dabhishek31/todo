import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import TodoForm from './TodoForm';
import { getBucketLists } from '../../actions';
class index extends Component {
  constructor(props){
    super(props);
    this.state = {};
    props.getBuckets();
  }
  render() {
    return (
      <div className="header-route-container">
				<Header {...this.props} />
				<div className="dashboardContents">
          <TodoForm buckets = {this.props.buckets}/>
				</div>
			</div>
    )
  }
}

const mapStateToProps = state => ({
	buckets: state.buckets,
	bucketId: state.bucketId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getBuckets: (bucketId) => {
		dispatch(getBucketLists(bucketId));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);