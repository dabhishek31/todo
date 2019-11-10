import React from 'react';

const TodoForm = props => {
	const [listDetails, setListDetails] = React.useState({
		title: '',
		description: '',
		bucketId: props.bucketId,
	});

	const [error, setErrorMessage] = React.useState('');

	const saveListForm = e => {
		e.preventDefault();
		if (listDetails.title.trim() !== '') {
			setErrorMessage('');
			props.saveTodoLists(listDetails);
			setListDetails({
				title: '',
				description: '',
				bucketId: props.bucketId,
			});
		} else {
			setErrorMessage('Please provide title of the note');
		}
	};

	const handleFields = e => {
		setListDetails({ ...listDetails, [e.target.name]: e.target.value });
	};

	return (
		<div className="body-component">
			<div className="bodyHeader">
				<div>ADD YOUR NOTES HERE: </div>
			</div>
			<hr />
			<div className="bodycreate">
				<form className="create-form" onSubmit={e => saveListForm(e)}>
					<div className="form-group">
						<div>* TITLE:</div>
						<input type="text" name="title" value={listDetails.title} onChange={e => handleFields(e)} />
					</div>
					{error !== '' && <div className="err">{error}</div>}
					<div className="form-group">
						<div>DESCRIPTION:</div>
						<textarea
							rows="6"
							name="description"
							value={listDetails.description}
							onChange={e => handleFields(e)}
						/>
					</div>
					<div className="form-group">
						<div>SELECT BUCKET: (OPTIONAL)</div>
						<select name="bucketId" value={listDetails.bucketId} onChange={e => handleFields(e)}>
							{props.buckets.length &&
								props.buckets.map((data, i) => {
									return (
										<option selected={data.id === props.bucketId} value={data.id}>
											{data.id == 1 ? '/' : data.bucketName}
										</option>
									);
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
