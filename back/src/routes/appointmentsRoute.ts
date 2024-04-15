import { Router } from "express";
import {
    getAppointment,
    getAppointments,
    postAppointment,
    putAppointment,
} from "../controllers/appointmentsController";

const appointmentsRoute: Router = Router();

appointmentsRoute.get("/", getAppointments);
appointmentsRoute.get("/:id", getAppointment);
appointmentsRoute.post("/schedule", postAppointment);
appointmentsRoute.put("/cancel/:id", putAppointment);

export default appointmentsRoute;
