import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to="/" className={styles.navigation}>
                Home
            </Link>
            |
            <Link to="/appointments" className={styles.navigation}>
                My Appointments
            </Link>
            |
            <Link to="/aboutUs" className={styles.navigation}>
                About Us
            </Link>
            |
            <Link to="/contactUs" className={styles.navigation}>
                Contac Us
            </Link>
        </div>
    );
};

export default Navigation;
