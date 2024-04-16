import { useState } from "react";

const Register = () => {
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    };
    const { form, setForm } = useState({});
    const { errors, setError } = useState({});

    const handleChange = () => {
        
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                {
                    [
                        {label: "Name", name: "name", type:"text"},
                        {label: "Email", name: "email", type:"text"},
                        {label: "Username", name: "username", type:"text"},
                        {label: "Password", name: "password", type:"password"},
                        {label: "N° DNI", name: "nDni", type:"text"},
                        {label: "Birthdate", name: "birthdate", type:"date"},
                    ].map(({name, label, type})=>{
                        return (
                            <div key={name}> 
                                <label>{label}</label>
                                <input type={type} onChange={handleChange} name={name} value={form[name]}/>
                                {errors[name] && <span key={name}>{errors[name]}</span>}
                            </div>
                        )
                    })
                }
                <button type="submit">Register</button>
            </form>
        </div>
        );
};

export default Register;
