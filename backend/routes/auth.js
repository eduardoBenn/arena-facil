const express = require("express");
const { login, register, permission } = require("../controllers/auth");

const router = express.Router();

router.get("/permission", permission);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
