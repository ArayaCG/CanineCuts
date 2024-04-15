import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({
    name: "users",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column({
        length: 100,
    })
    email: string;

    @Column({
        length: 100,
    })
    birthdate: string;

    @Column({
        length: 100,
    })
    nDni: string;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentialsId: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.userId)
    appointment: Appointment[];
}
