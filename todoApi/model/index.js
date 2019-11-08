const response = {
	data: {},
	success: false,
};

const todoApis = {
	getBucketLists: (req, res) => {
		let query = 'SELECT * FROM `todoBuckets` ORDER BY bucketCreated DESC';
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	getTodoLists: (req, res) => {
		let query =
			'SELECT * FROM todoLists JOIN todoBuckets ON todoLists.buckedId = todoBuckets.id ORDER BY todoLists.datePosted DESC';
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	deleteBuckets: (req, res) => {
		let { id, multiDel, type } = req.body;
		let query = '';
		if (multiDel) {
			multiId = id.join(',');
			if (type === 'file') {
				query = `DELETE FROM todoLists WHERE id IN (${multiId})`;
			} else {
				query = `DELETE todoBuckets, todoLists FROM todoBuckets JOIN todoLists ON todoLists.buckedId = todoBuckets.id WHERE todoBuckets.id IN (${multiId})`;
			}
		} else {
			if (type === 'file') {
				query = `DELETE FROM todoLists WHERE id = ${id}`;
			} else {
				query = `DELETE todoBuckets, todoLists FROM todoBuckets JOIN todoLists ON todoLists.buckedId = todoBuckets.id WHERE todoBuckets.id = ${id}`;
			}
		}
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	updateTodoBuckets: (req, res) => {
		let { id, name } = req.body;
		let query =
			`UPDATE todoBuckets SET bucketName = ${name}, bucketUpdated = NOW() WHERE id = ${id}`;
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	updateTodoLists: (req, res) => {
		let { id, name } = req.body;
		let query =
			`UPDATE todoLists SET title = ${title}, description = ${desc} dateUpdated = NOW() WHERE id = ${id}`;
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	getListById: (req, res) => {
		let { id, type } = req.body;
		let query = '';
		if(type === 'file'){
			query = `SELECT * FROM todoLists WHERE id = ${id}`;
		}else{
			query = `SELECT * FROM todoBuckets WHERE id = ${id}`;
		}
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	toggleDone: (req, res) => {
		let { id, type } = req.body;
		let query = `UPDATE todoLists SET done = ${type} dateUpdated = NOW() WHERE id = ${id}`;
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
};

module.exports = todoApis;