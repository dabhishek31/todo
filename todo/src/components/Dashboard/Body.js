import React from 'react';
import bin from '../../img/bin.png';
import bucket from '../../img/bucket.png';
import info from '../../img/info.png';
import edit from '../../img/edit.png';
import deletes from '../../img/delete.png';
import notes from '../../img/notes.png';
import tickEmpty from '../../img/tick-empty.png';
import tickFull from '../../img/tick-full.png';

const Body = props => {
	return (
		<div className="body-component">
			<div className="bodyHeader">
				<div>Manage your notes and buckets here</div>
				<img src={bin} className="sixty" title="Select Multiple Notes To Delete"/>
			</div>
			<hr />
			<div className="bodyNotesList">
				{props.buckets &&
					props.buckets.map((data, i) => {
						return (
							<>
								<div className="lists buckets" key={i}>
									<div className="bucket-icon">
										<img src={bucket} alt="Buckets Images" />
									</div>
									<div className="bucket-name">
										{data.bucketName}
										<br />
										BUCKET
									</div>
									<div className="bucket-info">
										{/* <div>10th Nov 2019 10:21 PM</div> */}
										<div>{data.bucketCreated}</div>
										<div>
											<img src={info} alt="Click here to check info" title="Information" />
											<img src={deletes} alt="Click here to delete buckets" title="Delete"/>
										</div>
									</div>
								</div>
								<hr />
							</>
						);
					})}
				{props.notes &&
					props.notes.map((data, i) => {
						return (
							<>
								{/* <div key={i}>
									{data.title} - {data.description}- {data.datePosted} - {data.dateUpdated}
								</div>
								<hr /> */}
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
										{/* <div>10th Nov 2019 10:21 PM</div> */}
										<div>{data.datePosted}</div>
										<div>
											<div>
												<input type="checkbox" />
											</div>
											<img src={tickEmpty} alt="Not Selected"  title="Mark It Done"/>
											<img src={edit} alt="Edit" title="Edit Note"/>
											<img src={deletes} alt="Click here to delete buckets" title="Delete"/>
										</div>
									</div>
								</div>
								<hr />
							</>
						);
					})}
			</div>
		</div>
	);
};

export default Body;
// {"buckets":[{"id":5,"bucketName":"Educational","bucketParent":0,"bucketCreated":"2019-11-09T17:31:13.000Z","bucketUpdated":"2019-11-09T17:31:13.000Z"},{"id":1,"bucketName":"Empty","bucketParent":0,"bucketCreated":"2019-11-08T16:20:51.000Z","bucketUpdated":"2019-11-08T16:20:51.000Z"}],"notes":[{"id":1,"title":"FootBall Game","description":"Inter-school football match vs loreto on saturday","done":0,"datePosted":"2019-11-09T17:29:49.000Z","dateUpdated":"2019-11-09T17:29:49.000Z","buckedId":1}]}
