const express = require("express");
const router = express.Router();

const {
  getColleges,
  getCollegebyName,
  allCollegename,
  insertCollege,
  getCollegebyId,
  collegesByRanking,
  collegeSearchCount,
  collegeBySearchCount
} = require("../controllers/college.controller");

router.get("/", getColleges);
router.get("/name/:name", getCollegebyName);
router.get("/allname", allCollegename);
router.get("/insert", insertCollege);
router.get("/searchid/:id", getCollegebyId);
router.get("/byranking", collegesByRanking);
router.post("/addsearchcount", collegeSearchCount);
router.get("/bysearchcount", collegeBySearchCount);



module.exports = router;
