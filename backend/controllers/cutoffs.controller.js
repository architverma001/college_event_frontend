const Cutoffs = require("../models/cutoffs.model");
const College = require("../models/college.model");
const {
  successresponse,
  errorresponse,
  catchresponse,
} = require("../utils/response");

const predictorByCutoffs = async (req, res) => {
    try {
        const {course,rank,category} = req.body;
        const Cutoff = await Cutoffs.find({"course.coursename":course,[`${category}.male`]:{$lte:rank},round:1,year:2023 },{"college.id":1,"_id":0});
        const collegeId = Cutoff.map((college) => college.college.id);
        const colleges = await College.find({ "_id": { $in: collegeId }});
        if (colleges.length === 0) {
        return errorresponse(res, 400, "Cutoffs not found");
        }
        return successresponse(res, colleges, "Cutoffs fetched successfully");
    } catch (error) {
        return catchresponse(res);
    }
};

module.exports = {
    predictorByCutoffs,
    };


