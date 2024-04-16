import vite from "/vite.svg";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.contenedor}>
            <img src={vite} className={styles.logo} alt="Vite logo" />
            <h1>CanineCuts</h1>
        </div>
    );
};

export default Logo;
