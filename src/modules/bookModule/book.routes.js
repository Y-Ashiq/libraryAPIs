import { Router } from "express";

import bookcontrollers from "./book.controller.js";
import userAuth from "../../middleware/auth.js";

const bookRourter = Router();


bookRourter
  .route("/books")
  .get(bookcontrollers.getAllBook)
  .post(userAuth,bookcontrollers.addBook);

bookRourter
  .route("/books/:id")
  .put(userAuth,bookcontrollers.updateBook)
  .delete(userAuth,bookcontrollers.deleteBook);

export default bookRourter;
