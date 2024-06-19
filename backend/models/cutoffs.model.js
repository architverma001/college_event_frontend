const mongoose = require("mongoose");
const { Schema } = mongoose;
const genderSchema = new Schema({
  male: {
    type: Number,
  },
  female: {
    type: Number,
  },
});

const cutoffsSchema = new Schema({
  college: {
    type: Schema.Types.ObjectId,
    ref: "College",
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  year: {
    type: Number,
  },
  round: {
    type: Number,
  },
  general: [genderSchema],
  sc: [genderSchema],
  st: [genderSchema],
  ews: [genderSchema],
  obcncl: [genderSchema],
  ewspwd: [genderSchema],
  generalpwd: [genderSchema],
  obcnclpwd: [genderSchema],
  scpwd: [genderSchema],
});

const Cutoffs = mongoose.model("Cutoffs", cutoffsSchema);
