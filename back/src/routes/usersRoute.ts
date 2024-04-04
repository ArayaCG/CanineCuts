import { Router } from "express";
import { createUsers, loginUsers, getUsers, getUser } from "../controllers/userController";
const userRouter: Router = Router();


userRouter.post("/register", createUsers)
userRouter.post("/login", loginUsers)

userRouter.get("/", getUsers)

userRouter.get("/:id", getUser)

export default userRouter