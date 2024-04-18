import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Appointment from "../../components/Appointment/Appointment";
import styles from "./MyAppointments.module.css";
import axios from "axios";

const MyAppointments = () => {
    const [myAppointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/appointments/");
                setAppointments(response.data);
            } catch (error) {
                console.log("Error a l obtener datos", error);
            }
        };
        fetchData();
    }, []);

    const user = useSelector((state) => state.userActive);
    const navigate = useNavigate();
    
    useEffect(() => {
        !user.name && navigate("/");
    }, []);

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
