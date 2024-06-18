const mongoose = require("mongoose");
const { Schema } = mongoose;

const collegeSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  image: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  contact: {
    type: Number,
  },
  email: {
    type: String,
  },
  website: {
    type: String,
  },
  approvedaurthority: {
    type: String,
  },
  userrating: {
    type: Number,
  },
  totalrating: {
    type: Number,
  },
  hostel:{
    type: Boolean,
  },
  startupincubation:{
    type: Boolean,
  },
  sports:{
    type: Boolean,
  },
  reviews:{
    type: String,
  },
  courses:{
    type:[Schema.Types.ObjectId],
    ref:"Course"
  },
  
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;