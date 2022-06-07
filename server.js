require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

const connectDb = require("./src/config/db");
connectDb();

app.use(express.json());

// const data = async () => {
//   let x = await axios({
//     url: "http://msdtelematics.com/",
//   });
//   console.log(x);
// };
// data();

app.use("/api/v1", require("./src/modules/master.routes"));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
