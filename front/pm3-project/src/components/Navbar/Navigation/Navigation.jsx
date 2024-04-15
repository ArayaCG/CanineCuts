import styles from "./Navigation.module.css"

const Navigation = () =>{
    return (
        <ul>
          <li><a href="/" className={styles.navigation}>Home</a></li>
          <li><a href="/Appointments" className={styles.navigation}>Appointments</a></li>
        </ul>
      );
}

export default Navigation;