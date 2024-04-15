import { AppDataSource } from "../data-source";
import { User } from "../../entities/User";

const UserRepository = AppDataSource.getRepository(User);

export default UserRepository;
