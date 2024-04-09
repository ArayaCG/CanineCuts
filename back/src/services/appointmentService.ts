// Implementar una función que pueda retornar el arreglo completo de turnos.
// Implementar una función que pueda obtener el detalle de un turno por ID.
// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.

import IAppointment from "../interfaces/IAppointment";

const appointments: IAppointment[] = [];

export const getUsersService = async (): Promise<IAppointment[]> => {
    const allAppointments: IAppointment[] = appointments;
    if(!allAppointments){
        throw Error("Error en la base de datos al buscar usuarios")
    }else{
        return allAppointments;
    }
};