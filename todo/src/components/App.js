import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from '../routes';
class App extends Component {
	render() {
		return (
			<Router>
				<Link exact to="/">To Do Application</Link>
				<Link to="/create/note">Create Note</Link>
				<Link to="/create/bucket">Create Bucket</Link>
				<Routes />
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		// selected: state.getIn(['globalState', 'selectedHeader']),
	};
};

const mapDispatchToProps = dispatch => ({
	// messageTabChange: data => dispatch(messageTabChange(data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
