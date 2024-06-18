const { model } = require("mongoose");
const College = require("../models/college.model");
const {
  successresponse,
  errorresponse,
  catchresponse,
} = require("../utils/response");

const getColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    if (!colleges) {
      return errorresponse(res, 400, "Colleges not found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

module.exports = {
  getColleges,
};
