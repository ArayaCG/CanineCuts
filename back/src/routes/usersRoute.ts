import { Router } from "express";
import { createUsers, getUsers, getUser, loginUser } from "../controllers/userController";
const userRouter: Router = Router();

userRouter.get("/:id", getUser);
userRouter.get("/", getUsers);
userRouter.post("/register", createUsers);
userRouter.post("/login", loginUser);

export default userRouter;
