import LoginButton from "./Navbar/LoginButton/LoginButton";
import Logo from "./Navbar/Logo/Logo";
import Navigation from "./Navbar/Navigation/Navigation";

const Navbar = () => {
    return (
        <>
            <nav>
                <Logo />
                <Navigation />
                <LoginButton />
            </nav>
        </>
    );
};

export default Navbar;
