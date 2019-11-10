import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBucketAndNotes } from '../actions';
import todoList from '../img/todo-list.png';
import add from '../img/add.png';
import folder from '../img/folder.png';
import createNote from '../img/createNote.png';

const sidebar = props => {
	return (
		<div className="sidebarContents">
			<div className="app-name-wrapper">
				<Link className="app-name" exact to="/" onClick={() => {
					props.getBucketAndNotes(1);
				}}>
					<img src={todoList} />
					<div className="app-name-container font-style">
						<div className="main-text">TO-DO</div>
						<div className="sub-text">APPLICATION</div>
					</div>
				</Link>
			</div>
			<hr className="hr-sidebar" />
			<div className="sub-menu ">
				<Link to="/create/bucket" className="sidebar-sub-menu font-style">
					<img src={folder} />
					<div className="sub-menu-list">
						<div className="sub-menu-text">
							CREATE
							<br />
							BUCKET
						</div>
					</div>
					<img src={add} className="sixty" />
				</Link>
				<Link to="/create/note" className="sidebar-sub-menu font-style">
					<img src={createNote} />
					<div className="sub-menu-list">
						<div className="sub-menu-text">
							CREATE
							<br />
							NOTE
						</div>
					</div>
					<img src={add} className="sixty" />
				</Link>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	getBucketAndNotes: bucketId => {
		dispatch(getBucketAndNotes(bucketId));
	},
});

export default connect(
	null,
	mapDispatchToProps
)(sidebar);
