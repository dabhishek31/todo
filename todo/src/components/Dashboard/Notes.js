import React from 'react';
import { useHistory } from "react-router-dom";
import edit from '../../img/edit.png';
import deletes from '../../img/delete.png';
import notes from '../../img/notes.png';
import tickEmpty from '../../img/tick-empty.png';
import tickFull from '../../img/tick-full.png';
import { connect } from 'react-redux';


const Notes = props => {
	const history = useHistory();
	return (
		<>
			{props.notes &&
				props.notes.map((data, i) => {
					return (
						<>
							<div className="lists notes" key={i} onClick={() => {
								// props.setNoteId(data.id);
							}}>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
	null,
	mapDispatchToProps
)(Notes);
