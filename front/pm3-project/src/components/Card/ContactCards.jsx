import styles from "./ContactCards.module.css";

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
