import styles from "./Appointment.module.css";

// eslint-disable-next-line react/prop-types
const Appointment = ({ date, time, status, description }) => {
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
        </div>
    );
};

export default Appointment;
