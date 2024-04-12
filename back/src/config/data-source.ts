import {DataSource} from "typeorm";
import { PASSWORD_SQL } from "./envs";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: PASSWORD_SQL,
    database: "demo_typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User);