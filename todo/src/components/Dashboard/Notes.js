import React from 'react';
import edit from '../../img/edit.png';
import deletes from '../../img/delete.png';
import notes from '../../img/notes.png';
import tickEmpty from '../../img/tick-empty.png';
import tickFull from '../../img/tick-full.png';

const Notes = props => {
	return (
		<>
			{props.notes &&
				props.notes.map((data, i) => {
					return (
						<>
							<div className="lists notes" key={i}>
								<div className="bucket-icon">
									<img src={notes} alt="Buckets Images" />
								</div>
								<div className="bucket-name">
									{data.title}
									<br />
									{data.description}
								</div>
								<div className="bucket-info">
									<div>{data.datePosted}</div>
									<div>
										<div>
											<input type="checkbox" />
										</div>
										<img src={tickEmpty} alt="Not Selected" title="Mark It Done" />
										<img src={edit} alt="Edit" title="Edit Note" />
										<img src={deletes} alt="Click here to delete buckets" title="Delete" />
									</div>
								</div>
							</div>
							<hr />
						</>
					);
				})}
		</>
	);
};

export default Notes;
