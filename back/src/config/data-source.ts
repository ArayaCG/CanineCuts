import {DataSource} from "typeorm";
import { PASSWORD_SQL } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: PASSWORD_SQL,
    database: "test",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})