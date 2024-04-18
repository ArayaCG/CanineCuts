import bone from "/bone.svg";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.contenedor}>
            <img src={bone} className={styles.logo} alt="bone logo" />
            <h1>CanineCuts</h1>
        </div>
    );
};

export default Logo;
