import { Router } from "express";
import {getAppointment, getAppointments, postAppointment, putAppointment} from "../controllers/appointmentsController";

const appointmentsRoute: Router = Router();

appointmentsRoute.post("/schedule", postAppointment);

appointmentsRoute.put("/cancel", putAppointment);

appointmentsRoute.get("/", getAppointments);

appointmentsRoute.get("/:id", getAppointment);

export default appointmentsRoute;
