import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { validate } from "../../helpers/validate";
import { postData } from "../../helpers/postData";

const Register = () => {
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        passwordRepeat: "",
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
        postData(form);
        setForm(initialState);
    };

    return (
        <div className={styles.formConteiner}>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                {[
                    { label: "Name", name: "name", type: "text" },
                    { label: "Email", name: "email", type: "text" },
                    { label: "Username", name: "username", type: "text" },
                    { label: "Password", name: "password", type: "password" },
                    { label: "Repeat password", name: "passwordRepeat", type: "password" },
                    { label: "DNI", name: "nDni", type: "text" },
                    { label: "Birthdate", name: "birthdate", type: "date" },
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
                <button
                    disabled={
                        errors.name ||
                        errors.username ||
                        errors.password ||
                        errors.email ||
                        errors.passwordRepeat ||
                        errors.nDni ||
                        errors.birthdate
                    }
                    type="submit"
                    className={styles.button}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
