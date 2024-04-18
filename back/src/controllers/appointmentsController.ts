import { Request, Response } from "express";
import { Appointment } from "../entities/Appointment";
import {
    changeStatusByIdService,
    createAppointmentService,
    getAllAppointmentService,
    getAppointmentByIdService,
} from "../services/appointmentService";

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAllAppointmentService();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};
export const getAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment: Appointment = await getAppointmentByIdService(Number(id));
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};
export const postAppointment = async (req: Request, res: Response) => {
    const { date, time, userId, status, description } = req.body;
    try {
        const newAppointment = await createAppointmentService({ date, time, userId, status, description });
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const putAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const changeStatus = await changeStatusByIdService(Number(id));
        res.status(200).json(changeStatus);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};
