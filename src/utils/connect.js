const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("Can't connect to DB");
    process.exit(1);
  }
}

module.exports = connect;
