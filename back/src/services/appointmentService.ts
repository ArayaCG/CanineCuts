import { AppointmentModel, UserModel } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

export const getAllAppointmentService = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentModel.find();
    return appointments;
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
    const appointment = await AppointmentModel.findOneBy({ id });
    if (appointment) {
        return appointment;
    } else {
        throw Error("El turno no existe");
    }
};

export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<Appointment> => {
    const { userId } = appointmentData;

    const user: User | null = await UserModel.findOneBy({ id: userId.id });

    if (!user) {
        throw new Error("El usario no existe en la base de datos");
    }

    const newAppointment = await AppointmentModel.create(appointmentData);
    newAppointment.userId = user;

    await AppointmentModel.save(newAppointment);
    return newAppointment;
};

export const changeStatusByIdService = async (id: number): Promise<Appointment> => {
    try {
        const appointment = await getAppointmentByIdService(id);
        appointment.status = "cancelled";
        await AppointmentModel.save(appointment);
        return appointment;
    } catch (error: any) {
        throw new Error("Error al cancelar el turno");
    }
};
