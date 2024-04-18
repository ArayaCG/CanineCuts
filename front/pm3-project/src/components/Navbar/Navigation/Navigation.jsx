import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
    const user = useSelector((state) => state.userActive);

    return (
        <div>
            <Link to="/" className={styles.navigation}>
                Home
            </Link>
            {user.name && (
                <Link to="/appointments" className={styles.navigation}>
                    My Appointments
                </Link>
            )}

            <Link to="/aboutUs" className={styles.navigation}>
                About Us
            </Link>

            <Link to="/contactUs" className={styles.navigation}>
                Contac Us
            </Link>
        </div>
    );
};

export default Navigation;
