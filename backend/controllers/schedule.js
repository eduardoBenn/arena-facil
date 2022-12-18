const Schedule = require("../db/models/schedule");

const getSchedules = (req, res) => {
  Schedule.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getSchedule = (req, res) => {
  Schedule.findOne({ _id: req.params.userID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Schedule not found" }));
};

const addSchedule = (req, res) => {
  Schedule.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ msg: error });
    });
};

const deleteSchedule = (req, res) => {
  Schedule.findOneAndDelete({ _id: req.params.bookID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: error }));
};

module.exports = {
  getSchedule,
  getSchedules,
  addSchedule,
  deleteSchedule,
};
