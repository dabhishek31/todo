import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import CreateTodo from '../components/CreateTodo';
import CreateBucket from '../components/CreateBucket';

const index = () => {
	return (
		<>
			<Route exact path="/" component={Dashboard} />
			<Route path="/create/note" component={CreateTodo} />
			<Route path="/create/bucket" component={CreateBucket} />
		</>
	);
};

export default index;
