export const validate = (input) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const dniRegex = /^\d{7,8}$/; 

    if (!input.name) {
        errors.name = "Name is required";
    }
    if (!emailRegex.test(input.email)) {
        errors.email = "Enter a valid email";
    }
    if (!input.username) {
        errors.username = "Username is required";
    }
    if (!passwordRegex.test(input.password)) {
        errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit";
    }
    if (!dniRegex.test(input.nDni)) {
        errors.nDni = "DNI is required";
    }
    if (!input.birthdate) {
        errors.birthdate = "Birthdate is required";
    }
    return errors;
};

