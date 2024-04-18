const validateAppointment = (formData) => {
    let errors = {};

    const appointmentDate = new Date(formData.date);
    const today = new Date();
    const appointmentTime = parseInt(formData.time.split(":")[0], 10);
    const currentTime = today.getHours();
    
    if (appointmentDate.toDateString() === today.toDateString()) {
        if (appointmentTime <= currentTime) {
            errors.date = "La cita debe programarse para un horario posterior al actual si es el mismo día.";
        } else if (appointmentDate < today) {
            errors.date = "La fecha de la cita no puede ser anterior al día actual.";
        }
    }
    
    const dayOfWeek = (appointmentDate.getDay() + 1) % 7;
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        errors.date = "El día de la cita debe ser entre Lunes y Sábado.";
    }

    if (appointmentTime < 8 || appointmentTime >= 20) {
        errors.time = "El horario de la cita debe estar entre las 8:00 y las 19:59.";
    }

    if (!formData.description.trim()) {
        errors.description = "La descripción es obligatoria.";
    }

    console.log("Errors:", errors);

    return errors;
};

export default validateAppointment;
