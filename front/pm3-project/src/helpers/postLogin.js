import axios from "axios";

export const postLogin = async (form) => {
    try {
        const response = await axios.post("http://localhost:3000/users/login", form);
        alert("Successful login");
        return response;
    } catch (error) {
        alert("User login error");
    }
};
