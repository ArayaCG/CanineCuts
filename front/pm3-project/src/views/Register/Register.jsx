import { useState } from "react";
import styles from "./Register.module.css";
import { validate } from "../../helpers/validate";

const Register = () => {
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    };

    // Corregir la desestructuración del array retornado por useState
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });

        const erroresDeCampo = validate({ ...form, [name]: value });
        setErrors({ ...errors, [name]: erroresDeCampo[name] });
    };

    const handleSubmit = () => {};


    return (
        <div className={styles.formConteiner}>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                {[
                    { label: "Name", name: "name", type: "text" },
                    { label: "Email", name: "email", type: "text" },
                    { label: "Username", name: "username", type: "text" },
                    { label: "Password", name: "password", type: "password" },
                    { label: "Repeat password", name: "repitePassword", type: "password" },
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
                <button disabled={errors} type="submit" className={styles.button}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
