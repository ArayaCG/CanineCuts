import { Router } from "express";
import usersRoute from "./usersRoute";
import appointmentsRoute from "./appointmentsRoute";

const router: Router = Router();

router.use("/users", usersRoute);
router.use("/appointments", appointmentsRoute);
router.use("/appointment", appointmentsRoute);

export default router;
