const express = require('express');
const router = express.Router();

const { getColleges,getCollegebyName,getcollegebyCourse} = require('../controllers/college.controller');

router.get('/', getColleges);
router.get('/name/:name', getCollegebyName);
router.get('/courses/:coursename', getcollegebyCourse);

module.exports = router;