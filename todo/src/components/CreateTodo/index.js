import React, { Component } from 'react'
import Header from '../Header';
import TodoForm from './TodoForm';
class index extends Component {
  render() {
    return (
      <div className="header-route-container">
				<Header {...this.props} />
				<div className="dashboardContents">
          <TodoForm />
				</div>
			</div>
    )
  }
}


export default index;
