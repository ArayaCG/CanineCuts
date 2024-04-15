import LoginButton from "./Navbar/LoginButton/LoginButton";
import Logo from "./Navbar/Logo/Logo";
import Navigation from "./Navbar/Navigation/Navigation";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <Logo />
                <Navigation />
                <LoginButton />
            </div>
        </>
    );
};

export default Navbar;
