const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
    name: {
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
    totalseats: {
        type: Number,
    },
    highestsalary: {
        type: Number,
    },
    averagesalary: {
        type: Number,
    },
    cutoff: {
        type: Number,
    },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;