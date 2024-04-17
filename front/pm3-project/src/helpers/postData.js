import axios from "axios";

export const postData = async (form) => {
    try {
        const response = await axios.post("http://localhost:3000/users/register/", form);
        alert("Successfully registered user");
        return response;
    } catch (error) {
        alert("Error registering user");
    }
};
