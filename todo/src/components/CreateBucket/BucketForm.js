import React from 'react';

const BucketForm = (props) => {
	const [bucketDetails, setBucketDetails] = React.useState({
    bucketName: '',
    bucketParent: props.bucketId
	});

	const [error, setErrorMessage] = React.useState('');

	const saveListForm = e => {
		e.preventDefault();
		if (bucketDetails.bucketName.trim() !== '') {
			setErrorMessage('');
			props.saveBucketLists(bucketDetails);
			setBucketDetails({
				bucketName: '',
			});
		} else {
			setErrorMessage('Please provide title of the note');
		}
	};

	const handleFields = e => {
		setBucketDetails({ ...bucketDetails, [e.target.name]: e.target.value });
	};

	return (
		<div className="body-component">
			<div className="bodyHeader">
				<div>ADD YOUR BUCKETS HERE: </div>
			</div>
			<hr />
			<div className="bodycreate">
				<form className="create-form" onSubmit={e => saveListForm(e)}>
					<div className="form-group">
						<div>BUCKET NAME:</div>
						<input type="text" name="bucketName" value={bucketDetails.bucketName} onChange={e => handleFields(e)} />
					</div>
          {error !== '' && <div className="err">{error}</div>}
          <div className="form-group">
						<div>SELECT ANY BUCKET TO MOVE YOUR BUCKET INSIDE IT: (OPTIONAL)</div>
						<select name="bucketParent" value={bucketDetails.bucketParent} onChange={e => handleFields(e)}>
							{props.buckets.length &&
								props.buckets.map((data, i) => {
									return (
										<option key={i} selected={data.id === props.bucketId} value={data.id}>
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

export default BucketForm;
