const { model } = require("mongoose");
const Course = require("../models/course.model");
const {
  successresponse,
  errorresponse,
  catchresponse,
} = require("../utils/response");

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        if (!courses) {
         com
        }
        return successresponse(res, courses, "Courses fetched successfully");
    } catch (error) {
        return catchresponse(res);
    }
    }

const getCoursebyName = async (req, res) => {
    try {
         const courses = await Course.find({coursename:req.params.name});
        if (!courses) {
            return errorresponse(res, "No courses found");
        }
        return successresponse(res, courses, "Courses fetched successfully");
    } catch (error) {
        return catchresponse(res);
    }
};

module.exports = {
    getCourses,getCoursebyName
};