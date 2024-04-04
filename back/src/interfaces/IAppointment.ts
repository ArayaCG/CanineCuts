interface IAppointment {
    id: number;
    date: Date;
    time: string;
    status: "active" | "cancelled";
    userId: number;
}

export default IAppointment;
