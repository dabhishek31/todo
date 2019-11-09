import React from 'react';

const TodoForm = () => {
	return (
		<div className="body-component">
			<div className="bodyHeader">
				<div>ADD YOUR NOTES HERE: </div>
			</div>
			<hr />
			<div className="bodycreate">
				<form className="create-form"> 
          <div className="form-group">
            <div>TITLE:</div>
            <input type="text" />
          </div>
          <div className="form-group">
            <div>DESCRIPTION:</div>
            <textarea rows="10"/>
          </div>
          <div className="form-group">
            <button type="submit">SAVE</button>
          </div>
        </form>
			</div>
		</div>
	);
};

export default TodoForm;
