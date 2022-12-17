const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  timestart: {
    type: Date,
    default: Date.now,
    required: true,
  },
  timeend: { type: Date, default: Date.now, required: true },
});

const BookModel = mongoose.model("Book", bookSchema);
module.exports = BookModel;
