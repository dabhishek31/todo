import React from 'react';

const TodoForm = props => {
	console.log(props);
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
						<textarea rows="6" />
					</div>
					<div className="form-group">
						<div>SELECT BUCKET: (OPTIONAL)</div>
						<select>
							{props.buckets.length &&
								props.buckets.map((data, i) => {
									return <option value={data.id}>{data.id == 1 ? '/' : data.bucketName}</option>;
								})}
						</select>
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
