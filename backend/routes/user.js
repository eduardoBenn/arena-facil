const express = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/users");
const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:userID", getUser);
router.put("/:userID", updateUser);
router.delete("/:userID", deleteUser);

module.exports = router;
