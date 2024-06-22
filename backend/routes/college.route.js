const express = require("express");
const router = express.Router();

const {
  getColleges,
  getCollegebyName,
  allCollegename,
  insertCollege,
} = require("../controllers/college.controller");

router.get("/", getColleges);
router.get("/name/:name", getCollegebyName);
router.get("/allname", allCollegename);
router.get("/insert", insertCollege);


module.exports = router;
