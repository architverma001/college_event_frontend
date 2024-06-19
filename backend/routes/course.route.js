const express = require('express');
const router = express.Router();

const { getCourses,getCoursebyName} = require('../controllers/courseController');
router.get('/', getCourses);
router.get('name/:name', getCoursebyName);

module.exports = router;