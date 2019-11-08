import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import Sidebar from './sidebar';
class App extends Component {
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

export default App;
