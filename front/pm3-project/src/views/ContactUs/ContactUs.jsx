import ContactCards from "../../components/Card/ContactCards";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
    const dataCards = [
        {
            name: "REPORT INCIDENT",
            number: "123-456-789",
            ionicName: "mail-outline",
        },
        {
            name: "HR CONCERNS",
            number: "123-456-789",
            ionicName: "help-circle-outline",
        },
        {
            name: "TECH SUPPORT",
            number: "123-456-789",
            ionicName: "alert-circle-outline",
        },
        {
            name: "COMPANY HELPDESK",
            number: "123-456-789",
            ionicName: "call-outline",
        },
    ];

    return (
        <>
            <div className={styles.contactUsConteinter}>
                <h1 className={styles.title}>Dont hesitate to contact us!</h1>
                <div className={styles.cardConteiner}>
                    {dataCards.map((cards) => {
                        return (
                            <div className={styles.card} key={cards.name}>
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
