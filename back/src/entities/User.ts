import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    credentialsId: number;
}

// interface IUser {
//     id: number;
//     name: string;
//     email: string;
//     birthdate: string;
//     nDni: string;
//     credentialsId: number;
// }

// export default IUser;
