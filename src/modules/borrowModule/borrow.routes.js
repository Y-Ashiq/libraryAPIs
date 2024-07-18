import { Router } from "express";

import borrowcontrollers from "./borrow.controller.js";
import userAuth from "../../middleware/auth.js";
import bookRourter from "../bookModule/book.routes.js";

const borrowRourter = Router();

bookRourter.post('/borrow/:id',userAuth, borrowcontrollers.borrow)
bookRourter.post('/return/:id',userAuth, borrowcontrollers.returnBook)
bookRourter.get('/borrowed',userAuth, borrowcontrollers.getBorrowed)


export default  borrowRourter