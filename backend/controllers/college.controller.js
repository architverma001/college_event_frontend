const College = require("../models/college.model");
const Course = require("../models/course.model");
const Cutoffs = require("../models/cutoffs.model");
const CollegeData = require("../CollegeData.json");

const {
  successresponse,
  errorresponse,
  catchresponse,
} = require("../utils/response");

const getColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    if (!colleges) {
      return errorresponse(res, 200, "Colleges not found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const getCollegebyName = async (req, res) => {
  try {
    const colleges = await College.find({ collegename: req.params.name });
    if (!colleges) {
      return errorresponse(res,200, "No colleges found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const allCollegename = async (req, res) => {
  try {
    const colleges = await College.find({}, { collegename: 1 });
    if (!colleges) {
      return errorresponse(res,200, "No colleges found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const insertCollege = async (req, res) => {
  try {
    const college = CollegeData;
    const insertedCollege = [];
    for (let i = 0; i < college.length; i++) {
      let courses = college[i].courses;
      // filter course from college object
      delete college[i].courses;
      // create college object
      const newCollege = new College(college[i]);
      for (let j = 0; j < courses.length; j++) {
        for (let k = 0; k < courses[j].branches.length; k++) {
          courses[j].branches[k].coursename = courses[j].coursename;
          let cutoffyear = courses[j].branches[k].cutoff;
          delete courses[j].branches[k].cutoff;
          courses[j].branches[k].college = {};
          courses[j].branches[k].college.id = newCollege._id;
          courses[j].branches[k].college.name = newCollege.collegename;
          const newCourse = new Course(courses[j].branches[k]);
          newCollege.courses.push({
            id: newCourse._id,
            coursename: newCourse.coursename,
            branchname: newCourse.branchname,
          });

          for (let l = 0; l < cutoffyear.length; l++) {
            let round = cutoffyear[l].rounds;
            for (let m = 0; m < round.length; m++) {
              round[m].college = {};
              round[m].college.id = newCollege._id;
              round[m].college.name = newCollege.collegename;
              round[m].course = {};
              round[m].course.id = newCourse._id;
              round[m].course.coursename = newCourse.coursename;
              round[m].course.branchname = newCourse.branchname;
              round[m].year = cutoffyear[l].year;
              const newCutoff = new Cutoffs(round[m]);
              newCourse.cutoffs.push({
                id: newCutoff._id,
                year: newCutoff.year,
                round: newCutoff.round,
              });
              await newCutoff.save();
            }
          }
          await newCourse.save();
        }
      }
      await newCollege.save();
      insertedCollege.push(newCollege);
    }
    return successresponse(res, insertedCollege, "College added successfully");
  } catch (error) {
    console.log(error);
    return catchresponse(res);
  }
};


module.exports = {
  getColleges,
  getCollegebyName,
  allCollegename,
  insertCollege,
};
