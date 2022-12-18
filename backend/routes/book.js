const express = require("express");
const {
  getBooks,
  createBook,
  deleteBook,
  getBook,
  updateBook,
  getAvailableBooks,
} = require("../controllers/book");
const router = express.Router();

router.get("/", getBooks);
router.post("/", createBook);
router.get("/available", getAvailableBooks);
router.get("/:userID", getBook);
router.put("/:userID", updateBook);
router.delete("/:userID", deleteBook);

module.exports = router;
