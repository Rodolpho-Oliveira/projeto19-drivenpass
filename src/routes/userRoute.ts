import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { signUpValidation } from "../middlewares/authMiddleware.js";

const userRouter = Router()

userRouter.post("/signup", signUpValidation, signUp)
userRouter.post("/signin", signUpValidation, signIn)

export default userRouter