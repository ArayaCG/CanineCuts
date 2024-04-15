import styles from "./Navigation.module.css"

const Navigation = () =>{
    return (
        <div>
          <a href="/" className={styles.navigation}>Home</a>
          <a href="/Appointments" className={styles.navigation}>Appointments</a>
        </div>
      );
}

export default Navigation;