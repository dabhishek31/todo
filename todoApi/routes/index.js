const express = require('express');
const router = express.Router();
const todoApis = require('../model');

router.get('/getBucketList', todoApis.getBucketLists);
router.get('/getBucketList', todoApis.getBucketLists);
router.post('/deleteBucket', todoApis.deleteBuckets);

module.exports = router;