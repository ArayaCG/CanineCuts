import ContactCards from "../../components/Card/ContactCards";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
    const dataCards = [
        {
            name: "REPORT INCIDENT",
            number: "123-456-789",
            ionicName: "mail-outline", // Cambiar de nameIonic a ionicName
        },
        {
            name: "HR CONCERNS",
            number: "123-456-789",
            ionicName: "help-circle-outline", // Cambiar de nameIonic a ionicName
        },
        {
            name: "TECH SUPPORT",
            number: "123-456-789",
            ionicName: "alert-circle-outline", // Cambiar de nameIonic a ionicName
        },
        {
            name: "COMPANY HELPDESK",
            number: "123-456-789",
            ionicName: "call-outline", // Cambiar de nameIonic a ionicName
        },
    ];

    return (
        <>
            <div className={styles.contactUsConteinter}>
                <h2>Dont hesitate to contact us</h2>
                <div className={styles.cardConteiner}>
                    {dataCards.map((cards) => {
                        return (
                            <div  className={styles.card} key={cards.name}>
                                <ContactCards ionicName={cards.ionicName} name={cards.name} number={cards.number} />
                            </div>
                        );
                    })}
                </div>
                <img src="/ContactUs.jpg" alt="" className={styles.img} />
            </div>
        </>
    );
};

export default ContactUs;
