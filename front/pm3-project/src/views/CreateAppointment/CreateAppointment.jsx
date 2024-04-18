import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CreateAppointment.module.css";
import { useSelector } from "react-redux";
import validateAppointment from "../../helpers/validateAppointment";
import { useNavigate } from "react-router-dom";

const CreateAppointment = () => {
    const user = useSelector((state) => state.userActive);
    const navigate = useNavigate();
    const initialState = {
        date: "",
        time: "",
        description: "",
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };
    useEffect(() => {
        !user.name && navigate("/");
    }, []);

    useEffect(() => {
        setErrors(validateAppointment(form));
    }, [form]);

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3000/appointment/schedule", {
                date: form.date,
                time: form.time,
                userId: user.id,
                status: "active",
                description: form.description,
            });
            alert("Appointment successfully registered");
            console.log(response);
        } catch (error) {
            alert("Error creating appointment");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        postData();
        setForm(initialState);
    };

    return (
        <div className={styles.formConteiner}>
            <h2>New Appointment</h2>
            <form onSubmit={handleSubmit}>
                {[
                    { label: "Date", name: "date", type: "date" },
                    { label: "Time", name: "time", type: "time" },
                    { label: "Description", name: "description", type: "text" },
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
                    disabled={errors.date || errors.time || errors.description}
                    type="submit"
                    className={styles.button}
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateAppointment;
