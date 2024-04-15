import { useState } from 'react';
import styles from "./LoginButton.module.css"

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <button onClick={handleLoginToggle} className={styles.login}>
      {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
    </button>
  );
}

export default LoginButton;
