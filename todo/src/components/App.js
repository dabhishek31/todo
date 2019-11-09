import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from '../routes';
import Sidebar from './sidebar';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Router>
				<div className="todoContainer">
					<Sidebar />
					<Routes />
				</div>
			</Router>
		);
	}
}

export default connect(
	null,
	null
)(App);
