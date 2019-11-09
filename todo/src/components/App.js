import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import Sidebar from './sidebar';
import Header from './Dashboard/Header';
class App extends Component {
	render() {
		return (
			<Router>
				<div className="todoContainer">
					<Sidebar />
					<div className="header-route-container">
						<Header />
						<Routes />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
