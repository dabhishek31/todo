const response = {
	data: {},
	success: false,
};

const todoApis = {
	getNoteBucketList: (req, res) => {
		let { bucketId } = req.body;
		let query = '';
		let sql = '';
		if (bucketId === 1) {
			query = `SELECT * FROM todoBuckets WHERE id != 1 AND bucketParent = 0 ORDER BY bucketCreated DESC`;
			sql = `SELECT * FROM todoLists WHERE buckedId = 1 ORDER BY datePosted DESC`;
		} else {
			query = `SELECT * FROM todoBuckets WHERE id != 1 AND bucketParent = ${bucketId} ORDER BY bucketCreated DESC`;
			sql = `SELECT * FROM todoLists WHERE buckedId = ${bucketId} ORDER BY datePosted DESC`;
		}
		db.query(query, (err, result) => {
			if (err) throw err;
			let finalData = {
				buckets: result,
			};

			db.query(sql, (err, result) => {
				if (err) throw err;
				response.data = { ...finalData, notes: result };
				response.success = true;
				res.json(response);
			});
		});
	},
	getBucketLists: (req, res) => {
		let query = 'SELECT * FROM `todoBuckets`';
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	addLists: (req, res) => {
		let { title, description, bucketId } = req.body.data;
		if (title.trim() !== '') {
			let stmt =
				'INSERT INTO `todolists`(`title`, `description`, `datePosted`, `dateUpdated`, `buckedId`) VALUES (?,?,NOW(),NOW(),?)';
			let todo = [title, description, bucketId];
			db.query(stmt, todo, (err, result) => {
				if (err) throw err;
				response.data = result;
				response.success = true;
				res.json(response);
			});
		} else {
			response.data = {
				msg: 'Please Give Title',
			};
			response.success = false;
			res.json(response);
		}
	},
	addBuckets: (req, res) => {
		let { bucketName, bucketParent } = req.body.data;
		if (bucketParent === 1) {
			bucketParent = 0;
		}
		if (bucketName.trim() !== '') {
			let stmt =
				'INSERT INTO `todobuckets`(`bucketName`, `bucketParent`, `bucketCreated`, `bucketUpdated`) VALUES (?,?,NOW(),NOW())';
			let todo = [bucketName, bucketParent];
			db.query(stmt, todo, (err, result) => {
				if (err) throw err;
				response.data = err;
				response.success = true;
				res.json(response);
			});
		} else {
			response.data = {
				msg: 'Please Give Bucket Name',
			};
			response.success = false;
			res.json(response);
		}
	},
	getListById: (req, res) => {
		let { id } = req.body;
		let sql = `SELECT * FROM todoLists WHERE id = ${id}`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			response.data = result[0];
			response.success = true;
			res.json(response);
		});
	},
	deleteBucketsNotes: (req, res) => {
		let { id, multiDel, type } = req.body;
		let query = '';
		if (multiDel) {
			multiId = id.join(',');
			query = `DELETE FROM todoLists WHERE id IN (${multiId})`;
		} else {
			if (type === 'file') {
				query = `DELETE FROM todoLists WHERE id = ${id}`;
			} else {
				query = `DELETE FROM todoBuckets WHERE id = ${id}; DELETE FROM todolists WHERE buckedId = ${id}; DELETE FROM todoBuckets WHERE bucketParent = ${id}`;
			}
		}
		db.query(query, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	// updateTodoBuckets: (req, res) => {
	// 	let { id, name } = req.body;
	// 	let query = `UPDATE todoBuckets SET bucketName = ${name}, bucketUpdated = NOW() WHERE id = ${id}`;
	// 	db.query(query, (err, result) => {
	// 		if (err) throw err;
	// 		response.data = result;
	// 		response.success = true;
	// 		res.json(response);
	// 	});
	// },
	updateNotes: (req, res) => {
		let { id, title, description, bucketId } = req.body;
		let query = `UPDATE todolists SET title=?,description=?,dateUpdated=NOW(),buckedId=? WHERE id = ?`;

		let params = [title, description, bucketId, id];

		db.query(query, params, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
	toggleDone: (req, res) => {
		let { id, type } = req.body;

		let query = `UPDATE todolists SET done=? WHERE id =?`;
		let params = [type, id];

		db.query(query, params, (err, result) => {
			if (err) throw err;
			response.data = result;
			response.success = true;
			res.json(response);
		});
	},
};

module.exports = todoApis;
