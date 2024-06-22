const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectDB = require("./db");

const collegeRoutes = require("./routes/college.route");
const courseRoutes = require("./routes/course.route");
const cutoffsRoutes = require("./routes/cutoffs.route");


connectDB();

app.use(cors());
app.use(express.json());

app.use("/colleges", collegeRoutes);
app.use("/courses", courseRoutes);
app.use("/cutoffs", cutoffsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
