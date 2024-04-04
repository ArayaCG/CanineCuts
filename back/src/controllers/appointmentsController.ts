import { Request, Response } from "express";

export const getAppointments = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se mostraran todos los turnos`);
};
export const getAppointment = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se mostraran detalles de un turno`);
};
export const postAppointment = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se agendará un nuevo turno`);
};
export const putAppointment = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se cambiará el estado a cancelado`);
};