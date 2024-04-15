import { AppDataSource } from "../data-source";
import { Appointment } from "../../entities/Appointment";

const AppointmentRepository = AppDataSource.getRepository(Appointment);

export default AppointmentRepository;
