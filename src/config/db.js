const mongoose = require("mongoose");

const NODE_ENV = process.env.NODE_ENV;
const MONGODB_URI_DEV = process.env.MONGODB_URI_DEV;
const MONGODB_URI_PROD = process.env.MONGODB_URI;

let MONGODB_URI = MONGODB_URI_DEV;

// NODE_ENV === "development"
//   ? (MONGODB_URI = MONGODB_URI_DEV)
//   : (MONGODB_URI = MONGODB_URI_PROD);

module.exports = connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(
      `Database connected: ${conn.connection.host} ${conn.connection.port}`
    );
  } catch (e) {
    console.log(`Database connection error: ${e}`);
    process.exit(1);
  }
};
