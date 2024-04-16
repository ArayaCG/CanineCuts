import { useState } from "react";
import { appointments } from "../../helpers/appointments";
import Appointment from "../../components/Appointment/Appointment";
import styles from "./MyAppointments.module.css"

const MyAppointments = () => {
    const [myAppointments, setAppointments] = useState(appointments);

    return (
        <>
            <h1>My Appointments</h1>
            <div className={styles.appointmentConteiner}>
                {!myAppointments || myAppointments.length === 0 ? (
                    <h1>No appointments to show</h1>
                ) : (
                    myAppointments.map((appointment) => {
                        return (
                            <Appointment
                                key={appointment.id}
                                date={appointment.date}
                                time={appointment.time}
                                description={appointment.description}
                                status={appointment.status}
                            />
                        );
                    })
                )}
            </div>
        </>
    );
};

export default MyAppointments;
