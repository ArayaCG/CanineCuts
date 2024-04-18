export const validate = (input) => {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const dniRegex = /^\d{7,8}$/;

    if (!input.name) {
        errors = {
            ...errors,
            name: "Name is required",
        };
    }
    if (!emailRegex.test(input.email)) {
        errors = {
            ...errors,
            email: "Enter a valid email",
        };
    }
    if (!input.username.trim()) {
        errors = {
            ...errors,
            username: "Username is required",
        };
    }
    if (!passwordRegex.test(input.password)) {
        errors = {
            ...errors,
            password:
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit",
        };
    }
    if (input.password !== input.passwordRepeat) {
        errors = {
            ...errors,
            passwordRepeat: "Passwords must match",
        };
    }
    if (!dniRegex.test(input.nDni)) {
        errors = {
            ...errors,
            nDni: "DNI must have 7 or 8 characters",
        };
    }
    if (!input.birthdate) {
        errors = {
            ...errors,
            birthdate: "Birthdate is required",
        };
    }
    return errors;
};
