import React from 'react';

const BucketForm = () => {
  return (
    <div className="body-component">
			<div className="bodyHeader">
				<div>ADD YOUR BUCKETS HERE: </div>
			</div>
			<hr />
			<div className="bodycreate">
				<form className="create-form"> 
          <div className="form-group">
            <div>BUCKET NAME:</div>
            <input type="text" />
          </div>
          <div className="form-group">
            <button type="submit">SAVE</button>
          </div>
        </form>
			</div>
		</div>
  );
}

export default BucketForm;
