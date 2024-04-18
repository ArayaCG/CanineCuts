import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/reducer";

const LoginButton = () => {
    const user = useSelector((state) => state.userActive);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/");
    };

    return (
        <div className={styles.login}>
            {user.name ? (
                <button onClick={handleLogout}>{user.name} (Log Out)</button>
            ) : (
                <Link to="/login">
                    <button>Log In</button>
                </Link>
            )}
        </div>
    );
};

export default LoginButton;
