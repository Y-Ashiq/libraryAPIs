import { Router } from "express";

import userControllers from "./user.controller.js";
import { cehckUser } from "../../middleware/checkUser.js";

const userRourter = Router();

userRourter.post("/signup", cehckUser, userControllers.signup);

userRourter.post("/signin", userControllers.signIn);


export default userRourter