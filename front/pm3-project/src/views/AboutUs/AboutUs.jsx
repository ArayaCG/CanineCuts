import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutUsConteinter}>
                <img src="/aboutUs.jpg" alt="" className={styles.img} />
                <div className="title">
                    <h1>About Us</h1>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
