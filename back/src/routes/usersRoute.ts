import { Router } from "express";
import { createUsers, loginUsers, getUsers, getUser } from "../controllers/userController";
const userRouter: Router = Router();

userRouter.get("/:id", getUser);
userRouter.get("/", getUsers);
userRouter.post("/register", createUsers);
userRouter.post("/login", loginUsers);

export default userRouter;
