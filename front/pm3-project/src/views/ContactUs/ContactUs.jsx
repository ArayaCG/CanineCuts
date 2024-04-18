import ContactCards from "../../components/Card/ContactCards";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
    const dataCards = [
        {
            name: "REPORT INCIDENT",
            number: "123-456-789",
            nameIonic: "mail-outline"
        },
        {
            name: "HR CONCERNS",
            number: "123-456-789",
            nameIonic: "help-circle-outline"
        },
        {
            name: "TECH SUPPORT",
            number: "123-456-789",
            nameIonic: "alert-circle-outline"
        },
        {
            name: "COMPANY HELPDESK",
            number: "123-456-789",
            nameIonic: "call-outline"
        },
    ]


    return (
        <>
            <div className={styles.contactUsConteinter}>
                <h2>Dont' hesitate to contact us</h2>
                <div className={styles.cardConteiner}>
                    {
                        dataCards.map((cards) => {
                            return (
                                <ContactCards
                                ionicName={cards.ionicName}
                                name={cards.name}
                                number={cards.number}
                                />
                            );
                        })
                    }
                </div>
                <img src="/ContactUs.jpg" alt="" className={styles.img} />
            </div>
        </>
    );
};

export default ContactUs;
