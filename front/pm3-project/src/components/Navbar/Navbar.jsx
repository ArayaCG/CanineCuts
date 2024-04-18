import LoginButton from "./LoginButton/LoginButton";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div className={styles.navbarConteiner}>
                <Logo />
                <Navigation />
                <LoginButton />
            </div>
        </>
    );
};

export default Navbar;
