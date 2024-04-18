import styles from "./Appointment.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelAppointment } from "../../redux/reducer";
// eslint-disable-next-line react/prop-types
const Appointment = ({ date, time, status, description, id }) => {
    const dispatch = useDispatch();

    const cancelAppointmentId = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/appointment/cancel/${id}`);
            console.log(response);
            dispatch(cancelAppointment(id));
        } catch (error) {
            console.log("Error al obtener datos del turno", error);
        }
    };
    const handleCancel = () => {
        cancelAppointmentId();
    };

    return (
        <div className={styles.card}>
            <div className={styles.card__item}>
                <span className={styles.card__label}>Date:</span>
                <span className={styles.card__value}>{date}</span>
            </div>
            <div className={styles.card__item}>
                <span className={styles.card__label}>Time:</span>
                <span className={styles.card__value}>{time}</span>
            </div>
            <div className={styles.card__item}>
                <span className={styles.card__label}>Description:</span>
                <span className={styles.card__value}>{description}</span>
            </div>
            <div className={styles.card__item}>
                <span className={styles.card__label}>Status:</span>
                <span className={styles.card__value}>{status}</span>
            </div>
            <button onClick={handleCancel} disabled={status === "cancelled"}>
                Cancel
            </button>
        </div>
    );
};

export default Appointment;
