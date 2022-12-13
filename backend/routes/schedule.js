const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  timestart: {
    type: Date,
    default: Date.now,
    required: true,
  },
  timeend: { type: Date, default: Date.now, required: true },
});

const ScheduleModel = mongoose.model("Book", scheduleSchema);
module.exports = ScheduleModel;
