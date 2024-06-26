import styles from "./ContactCards.module.css";

// eslint-disable-next-line react/prop-types
const ContactCards = ({ name, number, ionicName }) => {
    return (
        <div className={styles.card}>
            <ion-icon name={ionicName} className={styles.icono}></ion-icon>
            <div className={styles.text}>
                <p>{name}</p>
                <p>{number}</p>
            </div>
        </div>
    );
};

export default ContactCards;
