import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { validate } from "../../helpers/validate";
import { postLogin } from "../../helpers/postLogin";

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        setErrors(validate(form, errors));
    }, [form]);

    const handleSubmit = (e) => {
        e.preventDefault();
        postLogin(form);
        setForm(initialState);
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
            </form>
        </div>
    );
};

export default Login;
