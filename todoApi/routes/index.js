const express = require('express');
const router = express.Router();
const todoApis = require('../model');

router.get('/getNoteBucketList', todoApis.getNoteBucketList);
// router.get('/getBucketList', todoApis.getBucketLists);
// router.post('/deleteBucket', todoApis.deleteBuckets);

module.exports = router;
