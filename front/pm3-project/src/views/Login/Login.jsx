import { useEffect, useState } from "react";
import { validate } from "../../helpers/validate";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../helpers/postLogin";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import { setUserActive } from "../../redux/reducer";

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        setErrors(validate(form, errors));
    }, [form]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postLogin(form);
            dispatch(setUserActive(response.data.user));
            setForm(initialState);
            navigate("/");
        } catch (error) {
            console.error("Login Error", error);
        }
    };

    return (
        <div className={styles.formConteiner}>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                {[
                    { label: "Username", name: "username", type: "text" },
                    { label: "Password", name: "password", type: "password" },
                ].map(({ name, label, type }) => {
                    return (
                        <div className={styles.inputConteinter} key={name}>
                            <label className={styles.labelForm}>{label}:</label>
                            <input
                                className={styles.inputForm}
                                type={type}
                                onChange={handleChange}
                                name={name}
                                value={form[name]}
                            />
                            {errors[name] && (
                                <span key={name} className={styles.error}>
                                    {errors[name]}
                                </span>
                            )}
                        </div>
                    );
                })}
                <button disabled={errors.username || errors.password} type="submit" className={styles.button}>
                    Login
                </button>
                <p>
                    Don´t have an account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
