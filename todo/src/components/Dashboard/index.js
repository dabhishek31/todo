import React, { Component } from 'react';
import { connect } from 'react-redux';
import Body from './Body';
import Header from '../Header';
import { getBucketAndNotes } from '../../actions';
class index extends Component {
	constructor(props) {
		super(props);
		props.getBucketAndNotes();
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
