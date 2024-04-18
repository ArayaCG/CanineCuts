import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Appointment from "../../components/Appointment/Appointment";
import axios from "axios";
import { setUserAppointments } from "../../redux/reducer";
import styles from "./MyAppointments.module.css";

const MyAppointments = () => {
    const appointments = useSelector((state) => state.userAppointments);
    const user = useSelector((state) => state.userActive);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/users/${user.id}`);
                dispatch(setUserAppointments(response.data.appointment));
            } catch (error) {
                console.log("Error al obtener datos", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        !user.name && navigate("/");
    }, []);

    return (
        <>
            <div className={styles.todoConteiner}>
                <h1 className={styles.title}>My Appointments</h1>
                <div className={styles.appointmentConteiner}>
                    {!appointments || appointments.length === 0 ? (
                        <h1>No appointments to show</h1>
                    ) : (
                        appointments.map((appointment) => {
                            return (
                                <Appointment
                                    key={appointment.id}
                                    date={appointment.date}
                                    time={appointment.time}
                                    description={appointment.description}
                                    status={appointment.status}
                                    id={appointment.id}
                                />
                            );
                        })
                    )}
                </div>
                <p>
                    Do you want to create a new appointment?{" "}
                    <Link to="/newAppointment">Create new appointment here</Link>
                </p>
            </div>
        </>
    );
};

export default MyAppointments;
