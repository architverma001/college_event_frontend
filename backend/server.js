const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectDB = require("./db");

const collegeRoutes = require("./routes/college.route");



connectDB();

app.use(cors());
app.use(express.json());

app.use("/colleges", collegeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
