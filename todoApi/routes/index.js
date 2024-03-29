const express = require('express');
const router = express.Router();
const todoApis = require('../model');

router.post('/getNoteBucketList', todoApis.getNoteBucketList);
router.get('/getBucketList', todoApis.getBucketLists);
router.post('/addList', todoApis.addLists);
router.post('/addBuckets', todoApis.addBuckets);
router.post('/getListById', todoApis.getListById);
router.post('/deleteBucketsNotes', todoApis.deleteBucketsNotes);
router.post('/updateNotes', todoApis.updateNotes);
router.post('/toggleUpdater', todoApis.toggleDone);

module.exports = router;