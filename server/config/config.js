// config.js
const mongoose = require("mongoose");
require("colors");

// connectDB Function

const connectDb = async () => {
  try {
    // Manually set the MongoDB URI here
    const mongoUri = "mongodb+srv://admin:admin123@cluster0.ncenkgg.mongodb.net/";

    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

// export
module.exports = connectDb;
