const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: {
        w: "majority",
        j: true, // If you want to wait for the write to be committed to the journal
        wtimeout: 1000, // Optional: Specify a timeout
      },
    });
    mongoose.connection.on("connected", () => {
      console.log("Successfully connected to MongoDB Atlas!");
      resolve(); // Resolve the promise when the connection is established
    });

    mongoose.connection.on("error", (error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
      reject(error); // Reject the promise if there's an error
    });
  });
}

module.exports = dbConnect;
