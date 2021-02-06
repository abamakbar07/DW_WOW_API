const express = require("express");
const router = express.Router();

const {
   getUsers,
   deleteUser
} = require("../controllers/users");

const {
   getBooks,
   getBookDetail,
   addBook,
   editBook,
   deleteBook
} = require("../controllers/books")

router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);

router.get("/books", getBooks);
router.get("/book/:id", getBookDetail);
router.post("/book", addBook);
router.patch("/book/:id", editBook);
router.delete("/book/:id", deleteBook);

module.exports = router;