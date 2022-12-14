const Book = require("../db/models/book");
const Schedule = require("../db/models/schedule");

const getBooks = (req, res) => {
  Book.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getAvailableBooks = async (req, res) => {
  const schedules = await Schedule.find({});
  const scheduledBooks = schedules.map((schedule) => schedule.book);

  Book.find({ _id: { $nin: scheduledBooks } })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getBook = (req, res) => {
  Book.findOne({ _id: req.params.userID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Product not found" }));
};

const updateBook = (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.userID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "User not found" }));
};

const createBook = (req, res) => {
  Book.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const deleteBook = (req, res) => {
  Book.findOneAndDelete({ _id: req.params.userID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "User not found" }));
};

module.exports = {
  getBook,
  getBooks,
  updateBook,
  createBook,
  deleteBook,
  getAvailableBooks,
};
