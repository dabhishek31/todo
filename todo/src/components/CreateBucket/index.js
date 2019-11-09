import React, { Component } from 'react'
import Header from '../Header';
import BucketForm from './BucketForm';
class index extends Component {
  render() {
    return (
      <div className="header-route-container">
				<Header {...this.props} />
				<div className="dashboardContents">
          <BucketForm />
				</div>
			</div>
    )
  }
}


export default index;
