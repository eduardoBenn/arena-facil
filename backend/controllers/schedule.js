const Schedule = require("../db/models/schedule");
const Book = require("../db/models/book");
const User = require("../db/models/user");

const addSchedule = (req, res) => {
  Schedule.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ msg: error });
    });
};

const getSchedules = (req, res) => {
  Schedule.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getUserSchedules = async (req, res) => {
  const user = await Schedule.find({ user: req.params.user });
  const books = user.map((u) => u.book);
  Book.find({ _id: books })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getSchedule = (req, res) => {
  Schedule.findOne({ _id: req.params.userID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Schedule not found" }));
};

const deleteSchedule = (req, res) => {
  Schedule.findOneAndDelete({ _id: req.params.bookID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: error }));
};

module.exports = {
  addSchedule,
  getSchedule,
  getSchedules,
  deleteSchedule,
  getUserSchedules,
};
