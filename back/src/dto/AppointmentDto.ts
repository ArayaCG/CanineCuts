import { User } from "../entities/User";

interface AppointmentDto {
    date: string;
    time: string;
    userId: User;
    status: "active" | "cancelled";
    description: string;
}

export default AppointmentDto;
