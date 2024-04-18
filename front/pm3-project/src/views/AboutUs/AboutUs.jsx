import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutUsConteinter}>
                <img src="/aboutUs.jpg" alt="" className={styles.img} />
                <div className="title">
                    <h1>About Us</h1>
                    <p>At CanineCuts, we are dedicated to pampering your furry friends with expert grooming services. Our team provides personalized care tailored to each pet´s unique needs, ensuring they leave feeling refreshed and looking their best. We´re committed to excellence in grooming and actively support our community´s animals through collaborations with local shelters and rescue organizations. Join us at CanineCuts for a grooming experience that´s all about love and care.</p>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
