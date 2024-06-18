const express = require('express');
const router = express.Router();

const {
    getColleges,
} = require('../controllers/college.controller');

router.get('/', getColleges);

module.exports = router;