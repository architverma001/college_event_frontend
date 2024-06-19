const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
    coursename: {
        type: String,
    },
    duration: {
        type: Number,
    },
    eligibility: {
        type: String,
    },
    fee: {
        type: Number,
    },
    college: {
        type: Schema.Types.ObjectId,
        ref: "College",
    },
    ranking: {
        type: Number,
    },
    rankingframework: {
        type: String,
    },
    totalseats: {
        type: Number,
    },
    highestsalary: {
        type: Number,
    },
    averagesalary: {
        type: Number,
    },
    cutoffs: {
        type: Schema.Types.ObjectId,
        ref: "Cutoff",
    },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;