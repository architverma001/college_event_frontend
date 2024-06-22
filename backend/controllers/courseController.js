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

const allCoursename = async (req, res) => {
    try {
        // Fetch all course names from the database
        const courses = await Course.find({}, { coursename: 1, _id: 0 });

        // Check if courses array is empty
        if (!courses || courses.length === 0) {
            return errorresponse(res, "No courses found");
        }

        // Extract unique course names
        const uniqueCourses = [...new Set(courses.map(course => course.coursename))];

        // Prepare success response with unique course names
        return successresponse(res, uniqueCourses, "Courses fetched successfully");

    } catch (error) {
        // Handle any errors that occur during database operation
        return catchresponse(res);
    }
}

module.exports = {
    getCourses,getCoursebyName,allCoursename
};