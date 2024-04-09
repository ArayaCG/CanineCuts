interface IAppointmentDto {
    date: string;
    time: string;
    userId: number;
    status: "active" | "cancelled";
    description: string;
}

export default IAppointmentDto;
