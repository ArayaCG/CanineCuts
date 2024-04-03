import { Router } from "express";
import { createUsers, getUsers, deleteUsers } from "../controllers/userController";

const router: Router = Router();

router.post("/users", createUsers)

router.get("/users")

router.delete("/users")

export default router;