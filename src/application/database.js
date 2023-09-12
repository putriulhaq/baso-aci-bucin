const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Terhubung ke database MongoDB");
  } catch (error) {
    console.error("Koneksi ke database gagal:", error);
  }
};

module.exports = connectDb;
