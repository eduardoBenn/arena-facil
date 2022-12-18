const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  book: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
    unique: true,
  },
});

const ScheduleModel = mongoose.model("Schedule", scheduleSchema);
module.exports = ScheduleModel;
