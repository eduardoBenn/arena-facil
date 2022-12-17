const mongoose = require("mongoose");

async function dbConnect() {
  const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_URL, MONGODB_NAME } =
    process.env;

  mongoose.connect(
    `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.error("FAILED TO CONNECT TO MONGODB");
        console.error(err);
      } else {
        console.log("CONNECTED TO MONGODB!!");
      }
    }
  );
}

module.exports = dbConnect;
