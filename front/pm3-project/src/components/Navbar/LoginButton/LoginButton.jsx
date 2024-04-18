import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginButton.module.css";

const LoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginToggle = () => {
        setIsLoggedIn((prevState) => !prevState);
    };

    return (
        <Link to={isLoggedIn ? "/" : "/login"} className={styles.login}>
            <button onClick={handleLoginToggle}>{isLoggedIn ? "Log Out" : "Log In"}</button>
        </Link>
    );
};

export default LoginButton;
