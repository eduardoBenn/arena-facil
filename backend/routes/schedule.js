const express = require("express");
const {
  addSchedule,
  getSchedules,
  deleteSchedule,
  getSchedule,
  getUserSchedules,
} = require("../controllers/schedule");
const router = express.Router();

router.get("/", getSchedules);
router.post("/", addSchedule);
router.get("/:bookID", getSchedule);
router.delete("/:bookID", deleteSchedule);
router.get("/:user/user", getUserSchedules);

module.exports = router;
